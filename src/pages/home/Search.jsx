
import {  useEffect, useState } from "react";
import useAxiosPublic from "../../component/Hooks/useAxiosPublic";
import { Link } from "react-router-dom";



const Search = () => {
    const axiosPublic = useAxiosPublic();
    const [search,setSearch] = useState('');
    const [services, setServices] = useState();
    console.log(services);
   
 
const handleSearch = e => {
   setSearch(e.target.value)
  
  
 
}
useEffect(()=> {
    axiosPublic(`/search?search=${search}`)
    .then(res => setServices(res.data))
   

},[search,axiosPublic])

    return (
       <div>
         <div>
            <h1 className="text-center text-white text-3xl mt-16"><i>Please Search Your Favourite Brand</i></h1>
            <div className="flex justify-center mt-5 mb-20">
            <input onChange={handleSearch} className=" w-1/2 px-3" type="text" name="search"placeholder="Search" />
         <Link to={`/shop?search=${search}`}>
         <button className="ml-3 text-white text-2xl font-bold btn btn-outline">Search</button>
         </Link>
        </div>
        </div>
       </div>
    );
};

export default Search;