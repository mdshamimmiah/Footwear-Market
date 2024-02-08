import { useEffect, useState } from 'react';
import useAxiosPublic from "../../component/Hooks/useAxiosPublic";

const useServices = (search) => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState();
    
    
    useEffect(()=> {
        axiosPublic(`/search?search=${search}`)
        .then(res => setServices(res.data))
       
    
    },[search,axiosPublic,])
    return services;
};

export default useServices;