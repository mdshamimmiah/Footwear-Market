// import { useEffect, useState } from "react";
// // import { AuthContext } from "../../../../../Providers/AuthProvider";
// import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";
// import SlipperCard from "./SlipperCard";
// import { useParams } from "react-router-dom";


// const SlipperItem = () => {


//   const location = useParams();
//   // console.log(location);
//   // const { user } = useContext(AuthContext);
//   // console.log(user);
//   const [data, setData] = useState();
//   // console.log(data);
//   const [products, setProducts] = useState([]);
//   // console.log(data);


//   // const filtered = data?.filter(item => item.brand === 'Lotto' && item.category === 'Slipper')
//   // console.log(filtered);
//   // const filtered2 = data?.filter(item => item.brand === 'Lotto' && item.category === 'Loafer')
//   // console.log(filtered);

//   const axiosPublic = useAxiosPublic();
//   useEffect(() => {
//     axiosPublic.get('/slipperItem')
//       .then(res => setData(res.data))


//   }, [axiosPublic,  setData])
//   // user?.email,    axiosPublic.get(`/slipperItem/${user?.email}`)
//   useEffect(() =>{
//     const filtered = data?.filter(item => item.brand === location.brand && item.category === location.category)
//     setProducts(filtered)

//   },[location,data])

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//       {
//         products?.map((item) => <SlipperCard key={item._id} item={item}></SlipperCard>)

//       }
    
//     </div>
//   );
// };

// export default SlipperItem;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";


const SlipperItem = () => {
  const location = useParams();
  const [data, setData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get('/slipperItem')
      .then(res => setData(res.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [axiosPublic]);

  useEffect(() => {
    const filtered = data.filter(item => item.brand === location.brand && item.category === location.category);
    // Sort filtered products by price (ascending order)
    const sorted = filtered.sort((a,b) => a.price - b.price);
    setSortedProducts(sorted);
  }, [location, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {sortedProducts.map((product) => (
        <div key={product._id} className="card h-[600px] bg-black shadow-xl mt-4 border-purple-600 mx-auto p-4 mb-4 rounded-none">
          <figure><img className="w-[500px] h-[450px]" src={product.image} alt="Shoes" /></figure>
          <div className="card-body">
            <p className="text-white text-2xl font-extrabold">{product.name}</p>
            <p className="text-white text-xl">${product.price}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${product._id}`}>
                <button className="btn btn-primary text-center mx-auto">Product Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlipperItem;
