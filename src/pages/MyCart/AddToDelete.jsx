import Swal from "sweetalert2";
import useAxiosPublic from "../../component/Hooks/useAxiosPublic";
import AddToCart from "./AddToCart";


const AddToDelete = ({item,handleControll}) => {
// console.log(item.length);
    const axiosPublic = useAxiosPublic();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/carts/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                  handleControll()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              })
            }
          });
    
      
    }
  
    return (
        <div className="">
            
            <div className="card w-96 mx-auto h-[800px] bg-black shadow-xl mt-4 rounded-none mb-5 border border-solid border-purple-600">
                        <figure><img className="h-[350px] w-[400px]" src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <p className="text-white text-3xl">{item.name}</p>
                          <p className="text-white">{item.description}</p>
                          <p className="text-white text-xl">${item.price}</p>
                            <div className="flex justify-between">
                                <button onClick={() => handleDelete(item._id)} className="btn btn-outline text-white">Delete</button>
                                <button className="btn btn-outline text-white">Update</button>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>)
      

};

export default AddToDelete;