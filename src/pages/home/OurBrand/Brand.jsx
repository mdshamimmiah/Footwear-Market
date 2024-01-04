import { Link } from "react-router-dom";
import Modal from "../../../Modal";


const Brand = () => {
    return (

        <div>

            <h1 className="text-purple-600 text-center text-5xl mb-5 font-extrabold"><i>YOUR BRANDS</i></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 items-center">

                <div className="border border-blue-500 w-[300px] mx-auto">
                    <h1 className="text-white text-2xl text-center my-auto font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... ">LOTTO</h1>
                    <img className="w-w-[300px] relative h-[165.90px]" src="https://i.ibb.co/pwztN1r/lotto.jpg" alt="" />
                    <button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px] absolute -mt-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Click Me</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-blue-400">
                            <h3 className="font-bold text-lg"></h3>
                            <p className="py-4 text-center">Please Open This Page</p>
                            <div className="modal-action">
                                <form method="dialog" className="mx-auto gap-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/lotto'> <button className="btn mr-3">Open</button></Link>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="border border-blue-500 w-[300px] mx-auto">
                    <h1 className="text-white text-2xl text-center my-auto font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... ">APEX</h1>
                    <img className="w-[300px] relative h-[165.90px]" src="https://i.ibb.co/742P6fm/apex.jpg" alt="" />
                    <button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px] absolute -mt-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Click Me</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-blue-400">
                            <h3 className="font-bold text-lg"></h3>
                            <p className="py-4 text-center">Please Open This Page</p>
                            <div className="modal-action">
                                <form method="dialog" className="mx-auto gap-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/lotto'> <button className="btn mr-3">Open</button></Link>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="border border-blue-500 w-[300px] mx-auto">
                    <h1 className="text-white text-2xl text-center my-auto font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... ">BATA</h1>
                    <img className="w-[300px] relative h-[165.90px]" src="https://i.ibb.co/mq9XHrN/bata.jpg" alt="" />
                    <button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px] absolute -mt-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Click Me</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-blue-400">
                            <h3 className="font-bold text-lg"></h3>
                            <p className="py-4 text-center">Please Open This Page</p>
                            <div className="modal-action">
                                <form method="dialog" className="mx-auto gap-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/lotto'> <button className="btn mr-3">Open</button></Link>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="border border-blue-500 h-[220px] w-[300px] mx-auto">
                    <h1 className="text-white text-2xl text-center my-auto font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... ">WALKAROO</h1>
                    <img className="w-[300px]  relative" src="https://i.ibb.co/mhBtxxd/walk.png" alt="" />
                    <button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px] absolute -mt-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Click Me</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-blue-400">
                            <h3 className="font-bold text-lg"></h3>
                            <p className="py-4 text-center">Please Open This Page</p>
                            <div className="modal-action">
                                <form method="dialog" className="mx-auto gap-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/lotto'> <button className="btn mr-3">Open</button></Link>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="border border-blue-500 w-[300px] mx-auto">
                    <h1 className="text-white text-2xl text-center my-auto font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... ">STAR MAX</h1>
                    <img className="w-[300px] relative h-[165.90px]" src="https://i.ibb.co/YDq2zCb/star2.png" alt="" />
                    <button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px] absolute -mt-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Click Me</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-blue-400">
                            <h3 className="font-bold text-lg"></h3>
                            <p className="py-4 text-center">Please Open This Page</p>
                            <div className="modal-action">
                                <form method="dialog" className="mx-auto gap-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/lotto'> <button className="btn mr-3">Open</button></Link>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="border border-blue-500 w-[300px] mx-auto">
                    <h1 className="text-white text-2xl text-center my-auto font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... ">SEVEN STAR</h1>
                    <img className="w-[300px] relative h-[165.90px]" src="https://i.ibb.co/Gsr9YGn/seven.jpg" alt="" />
                    <button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px] absolute -mt-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Click Me</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-blue-400">
                            <h3 className="font-bold text-lg"></h3>
                            <p className="py-4 text-center">Please Open This Page</p>
                            <div className="modal-action">
                                <form method="dialog" className="mx-auto gap-3">
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to='/lotto'> <button className="btn mr-3">Open</button></Link>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Brand;