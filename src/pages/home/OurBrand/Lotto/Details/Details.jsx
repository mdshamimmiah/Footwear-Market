
// import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";
// import { useState } from "react";


import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";






const Details = () => {
  const [totall, setTotal] = useState(0);
  console.log(totall);
  const axiosPublic = useAxiosPublic();
  const data = useLoaderData();
  console.log(data);
 const {image, name, price,description} = data;
 const myCard = {image,name,price, description}
 console.log(myCard);
   const handleAddToCart = () =>{
    axiosPublic.post(`/myAddCard`, myCard)
    .then(res => {
        console.log(res.data);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product AddToCard successfully",
            showConfirmButton: false,
            timer: 1500
        });

    })

const allTotal = totall + price;
setTotal(allTotal)

   }
   
//  const axiosPublic = useAxiosPublic();
//  const [data, setData] = useState();
//  console.log(data);
//  axiosPublic.get(`/details/:id`)
//  .then(res => setData(res.data))
    

   
   
 
    return (
        <div>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={data.image} className="max-w-sm rounded-lg shadow-2xl items-start" />
    <div>
      <h1 className="text-5xl font-bold">{data.name}</h1>
      <p className="w-[200px]">{data.description}</p>
      <p className="py-6 text-xl font-extrabold">${data.price}</p>
      <button onClick={()=>handleAddToCart(price)} className="btn btn-primary w-40">Add To Cart</button>
    </div>
  </div>
 
</div>

        </div>
    );
};

export default Details;