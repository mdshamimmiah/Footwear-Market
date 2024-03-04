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

// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";


// const SlipperItem = () => {
//   const location = useParams();
//   const categories = ['Slipper', 'Loafer', 'Slide', 'Shoe', 'Sponge','Keds'];
//   const [data, setData] = useState([]);
//   const [sortedProducts, setSortedProducts] = useState([]);
//   const axiosPublic = useAxiosPublic();

//   useEffect(() => {
//     axiosPublic.get('/slipperItem')
//       .then(res => setData(res.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, [axiosPublic]);

//   useEffect(() => {
//     const filtered = data.filter(item => item.brand === location.brand && item.category === location.category);
//     // Sort filtered products by price (ascending order)
//     const sorted = filtered.sort((a,b) => a.price - b.price);
//     setSortedProducts(sorted);
//   }, [location, data]);

//   // Define items per page
//   const itemsPerPage = 2;

//   // Initialize pagination state for each category
//   const [pagination, setPagination] = useState(() => {
//     const paginationState = {};
//     categories.forEach(cat => {
//       paginationState[cat] = { page: 0 };
//     });
//     return paginationState;
//   });

//    // Function to get current page items for a specific category
//    const getCurrentPageItems = (category) => {
//     console.log(getCurrentPageItems);
//     const categoryItems = data?.filter(item => item.category === category);
//     const startIndex = pagination[category].page * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return categoryItems?.slice(startIndex, endIndex);
//   };
//  // Function to handle next page for a specific category
//  const nextPage = (category) => {
//   setPagination(prevPagination => ({
//     ...prevPagination,
//     [category]: {
//       ...prevPagination[category],
//       page: Math.min(prevPagination[category].page + 1, Math.floor(data?.filter(item => item.category === category).length / itemsPerPage))
//     }
//   }));
// };

// // Function to handle previous page for a specific category
// const prevPage = (category) => {
//   setPagination(prevPagination => ({
//     ...prevPagination,
//     [category]: {
//       ...prevPagination[category],
//       page: Math.max(prevPagination[category].page - 1, 0)
//     }
//   }));
// };



//   return (
//     <div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//       {sortedProducts.map((product) => (
//         <div key={product._id} className="card h-[600px] bg-black shadow-xl mt-4 border-purple-600 mx-auto p-4 mb-4 rounded-none">
//           <figure><img className="w-[500px] h-[450px]" src={product.image} alt="Shoes" /></figure>
//           <div className="card-body">
//             <p className="text-white text-2xl font-extrabold">{product.name}</p>
//             <p className="text-white text-xl">${product.price}</p>
//             <div className="card-actions justify-end">
//               <Link to={`/details/${product._id}`}>
//                 <button className="btn btn-primary text-center mx-auto">Product Details</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className='flex gap-5 text-center ml-4 text-2xl'>
//               <button onClick={() => prevPage(cat)} disabled={pagination[cat].page === 0}>Previous</button>
//               <button onClick={() => nextPage(cat)} disabled={pagination[cat].page === Math.floor(data?.filter(item => item.category === cat).length / itemsPerPage)}>Next</button>
//             </div>
//     </div>
//   );
// };

// export default SlipperItem;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";

const SlipperItem = () => {
  const location = useParams();
  const categories = ['Slipper', 'Loafer', 'Slide', 'Shoe', 'Sponge', 'Keds'];
  const [data, setData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  const itemsPerPage = 3;

  useEffect(() => {
    axiosPublic.get('/slipperItem')
      .then(res => setData(res.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [axiosPublic]);

  useEffect(() => {
    const filtered = data.filter(item => item.brand === location.brand && item.category === location.category);
    const sorted = filtered.sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  }, [location, data]);

  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total number of pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  };

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {getCurrentPageItems().map((product, index) => (
          <div key={index} className="card h-[600px] bg-black shadow-xl mt-4 border-purple-600 mx-auto p-4 mb-4 rounded-none">
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
      <div className='flex gap-5 text-center ml-4 text-2xl'>
        <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
      </div>
    </div>
  );
};

export default SlipperItem;
