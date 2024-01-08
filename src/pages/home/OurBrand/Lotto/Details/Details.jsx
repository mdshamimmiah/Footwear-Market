
// import useAxiosPublic from "../../../../../component/Hooks/useAxiosPublic";
// import { useState } from "react";

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";




const Details = () => {
   
   
//  const axiosPublic = useAxiosPublic();
//  const [data, setData] = useState();
//  console.log(data);
//  axiosPublic.get(`/details/:id`)
//  .then(res => setData(res.data))
    

    const data = useLoaderData();
    console.log(data);
   
 
    return (
        <div>
         <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={data.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;