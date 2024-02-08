import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";
import SlipperCard from "./SlipperCard";
import { useParams } from "react-router-dom";


const SlipperItem = () => {


  const location = useParams();
  // console.log(location);
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  console.log(data);
  const [products, setProducts] = useState([]);
  // console.log(data);


  // const filtered = data?.filter(item => item.brand === 'Lotto' && item.category === 'Slipper')
  // console.log(filtered);
  // const filtered2 = data?.filter(item => item.brand === 'Lotto' && item.category === 'Loafer')
  // console.log(filtered);

  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/slipperItem/${user?.email}`)
      .then(res => setData(res.data))


  }, [axiosPublic, user?.email, setData])
  useEffect(() =>{
    const filtered = data?.filter(item => item.brand === location.brand && item.category === location.category)
    setProducts(filtered)

  },[location,data])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {
        products?.map((item) => <SlipperCard key={item._id} item={item}></SlipperCard>)

      }
    
    </div>
  );
};

export default SlipperItem;