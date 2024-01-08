
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
        const brand = form.brand.value;
        const category = form.category.value;

        const AddNewProduct = { name, description, price, brand, email, rating, image, discount, category }

        console.log(AddNewProduct);

        axiosPublic.post(`/addProduct`, AddNewProduct)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Add successfully",
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
        <div className=" w-full bg-black">
            <div className="hero min-h-screen bg-black ">
                <div className="hero-content flex-col l">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Add Product</h1>

                    </div>
                    <div className=" w-full bg-black rounded-none">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <span className="label-text mb-3 w-full  mr-2 text-white">Name</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="text" name="name" placeholder="name" />
                                </div>
                                <div>
                                    <label className="mt-3 mb-3 ml-1  lg:ml-6  mr-2 text-white" >Price</label>
                                    <input className="w-[250px] lg:w-[500px] font-bold lg: h-[40px] mt-3" type="text" name="price" placeholder="price" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <span className="label-text mb-3 w-full  mr-2 text-white">Descr:</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="text" name="description" placeholder="Description" />
                                </div>
                                <div>
                                    <div>
                                        <span className="label-text mb-3 w-full ml-0 lg:ml-5 mr-2 text-white">Rating</span>
                                        <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="text" name="rating" placeholder="Rating" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <span className="label-text mb-3 w-full  mr-2 text-white">Image</span>
                                    <input className="w-[250px] lg:w-[500px] font-bold h-[40px] mt-3" type="url" name="image" placeholder="Photo" />
                                </div>
                                <div>
                                    <div>
                                        <span className="label-text mb-3 w-full -ml-3 lg:ml-2 mr-9 text-white">Discount</span>
                                        <input className="w-[250px] lg:w-[500px] font-bold h-[40px] -ml-8 mt-3" type="text" name="discount" placeholder="Discount" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <select name="category" className="select select-bordered mt-3 mb-3 ml-12 mr-[2px] w-[500px]" >Brand
                                    <option className="mt-3 mb-3" disabled selected>Category</option>
                                    <option>Keds</option>
                                    <option>Loafer</option>
                                    <option>Sponge</option>
                                    <option>Slipper</option>
                                    <option>Slide</option>
                                   
                                </select>
                                <select name="brand" className="select select-bordered mt-3 mb-3 ml-16 mr-[2px] w-[500px]" >Brand
                                    <option className="mt-3 mb-3" disabled selected>Brand</option>
                                    <option>Lotto</option>
                                    <option>Apex</option>
                                    <option>Bata</option>
                                    <option>Seven Star</option>
                                    <option>Star Max</option>
                                    <option>Walkaroo</option>
                                </select>
                            </div>

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

