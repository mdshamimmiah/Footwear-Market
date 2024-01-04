
import { useContext } from "react";

import useAxiosPublic from "../../../../component/Hooks/useAxiosPublic";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddProduct = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const email = (user?.email);
    const axiosPublic = useAxiosPublic();

    const handleAddProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const discount = form.discount.value;
        const priority = form.priority.value;

        const AddNewProduct = { name, description, price, priority, email, rating,image,discount }

        console.log(AddNewProduct);

        axiosPublic.post(`/createProduct`, AddNewProduct)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });

            })
            // ...
            .catch((error) => {
                // An error occurred
                console.error(error);
                // ...
            });




    }
    return (
        <div className=" w-full">
            <div className="hero min-h-screen bg-blue-300 ">
                <div className="hero-content flex-col l">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Product</h1>

                    </div>
                    <div className=" w-full bg-purple-500 rounded-none">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <span className="label-text mb-3 w-full  mr-2">Name</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="text" name="name" placeholder="name" />
                                </div>
                                <div>
                                    <label className="mt-3 mb-3 ml-1  lg:ml-6  mr-2" >Price</label>
                                    <input className="w-[250px] lg:w-[500px] font-bold lg: h-[40px] mt-3" type="text" name="price" placeholder="price" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <span className="label-text mb-3 w-full  mr-2">Descr:</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="text" name="description" placeholder="Description" />
                                </div>
                                <div>
                                <div>
                                    <span className="label-text mb-3 w-full ml-0 lg:ml-5 mr-2">Rating</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="text" name="rating" placeholder="Rating" />
                                </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <span className="label-text mb-3 w-full  mr-2">Image</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="url" name="image" placeholder="Photo" />
                                </div>
                                <div>
                                <div>
                                    <span className="label-text mb-3 w-full -ml-3 lg:ml-2 mr-9">Discount</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] -ml-8 mt-3" type="text" name="discount" placeholder="Discount" />
                                </div>
                                </div>
                            </div>
                            <select name="priority" className="select select-bordered mt-3 mb-3 ml-6 mr-[2px]" >Brand
                            <option className="mt-3 mb-3" disabled selected>Brand</option>
                                        <option>Lotto</option>
                                        <option>Apex</option>
                                        <option>Bata</option>
                                        <option>Seven Star</option>
                                        <option>Star Max</option>
                                        <option>Walkaroo</option>
                                    </select>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AddProduct;

