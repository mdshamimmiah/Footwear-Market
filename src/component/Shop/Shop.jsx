
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import useAxiosPublic from '../Hooks/useAxiosPublic';






// const Shop = () => {
    
//     const axiosPublic = useAxiosPublic();
//     const [services, setServices] = useState();
//     console.log(services);
//     const useQuery = () => new URLSearchParams(useLocation().search);



//     let query = useQuery();
//     const search = query.get('search')
//     console.log(search);
//     const {name,description,price,image} = search;
// -
//     const myCard = {image,name,price, description};
//     console.log(myCard);
//     const handleBay = () =>{
//         axiosPublic.post(`/myAddCard`,myCard)
//     }
    

 
//     useEffect(() => {
//         axiosPublic(`/search?search=${search}`)
//             .then(res => setServices(res.data))

//     }, [search, axiosPublic])
    
//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3 mx-auto justify-items-center bg-black'>
//             {
//                 services?.map((item) => <div key={item._id}>
//                     <div className="card w-96 h-[400px] bg-black shadow-xl rounded-none border border-solid border-purple-600">
//                         <figure><img className='h-[300px] w-[390px]' src={item.image} alt="Shoes" /></figure>
//                         <div className="card-body">
//                          <p className='text-2xl text-white'>{item.name}</p>
//                          <p className='text-xl text-white'>$ {item.price}</p>
//                                 <button onClick={() => handleBay(price)} className='btn btn-small text-xl font-bold bg-slate-500'>Bay</button>
//                             <div className="card-actions justify-end">
                               
//                             </div>
//                         </div>
//                     </div>
//                 </div>)
//             }
//         </div>
//     );
// };

// export default Shop;


import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Shop = () => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);

    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const search = query.get('search');
    console.log(search);

    const handleBay = (item) => {
        const myCard = {
            image: item.image,
            name: item.name,
            price: item.price,
            description: item.description
        };
        axiosPublic.post(`/myAddCard`, myCard)
            .then(response => {
                console.log('Item added to card:', response.data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Product Bay successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
        
            })
            
            .catch(error => {
                console.error('Error adding item to card:', error);
            });
    }

    useEffect(() => {
        if (search) {
            axiosPublic(`/search?search=${search}`)
                .then(res => setServices(res.data))
                .catch(error => {
                    console.error('Error fetching services:', error);
                });
        }
    }, [search, axiosPublic]);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto justify-items-center bg-black'>
            {services?.map((item) => (
                <div key={item._id}>
                    <div className="card w-96 h-[400px] bg-black shadow-xl rounded-none border border-solid border-purple-600">
                        <figure><img className='h-[300px] w-[390px]' src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='text-2xl text-white'>{item.name}</p>
                            <p className='text-xl text-white'>$ {item.price}</p>
                            <button onClick={() => handleBay(item)} className='btn btn-small text-xl font-bold bg-slate-500'>Buy</button>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
