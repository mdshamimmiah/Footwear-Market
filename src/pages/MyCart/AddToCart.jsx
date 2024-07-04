// import { useEffect, useState } from "react";
// import AddToDelete from "./AddToDelete";
// import useAxiosPublic from "../../component/Hooks/useAxiosPublic";

// const AddToCart = () => {
//     const axiosPublic = useAxiosPublic();
//     const [total, setTotal] = useState(0);
//     const [addTo, setAddTo] = useState([]);
//     const [DiscountAmount, setDiscountAmount] = useState(0);
//     const [reductAmount, setReductAmount] = useState(0);
//     const [controll, setControll] = useState(false);
//     const [paymentAmount, setPaymentAmount] = useState(0);
//     const [showAllCarts, setShowAllCarts] = useState(false);

//     useEffect(() => {
//         axiosPublic.get('/getAddToCard')
//             .then(res => setAddTo(res.data))

//     }, [axiosPublic, controll]);

//     // Calculate total price
//     useEffect(() => {
//         const totalPrice = addTo.reduce((acc, item) => acc + parseFloat(item.price), 0);
//         setTotal(totalPrice);
//     }, [addTo]);

//     const handleControll = () => {
//         setControll(!controll);
//     };

//     const handleDiscount = () => {
//         const discount = total / 100 * parseFloat(DiscountAmount);
//         setDiscountAmount(discount);
//         const ReductAmount = total - discount;
//         setReductAmount(ReductAmount);
//     };

//     const handlePaymentChange = (e) => {
//         const paymentValue = parseFloat(e.target.value);
//         const newPaymentAmount = reductAmount - paymentValue;
//         setPaymentAmount(newPaymentAmount);
//     };

//     const handleShowMoreClick = () => {
//         setShowAllCarts(true);
//     };

//     return (
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-20 w-[800px]">
//                 {showAllCarts ? (
//                     addTo.map((item) => (
//                         <AddToDelete key={item._id} item={item} handleControll={handleControll} />
//                     ))
//                 ) : (
//                     addTo.slice(0, 2).map((item) => (
//                         <AddToDelete key={item._id} item={item} handleControll={handleControll} />
//                     ))
//                 )}
//                 {!showAllCarts && addTo.length > 2 && (
//                     <button className="text-3xl -mt-5 text-center mb-3 text-green-700 font-bold items-center" onClick={handleShowMoreClick}>Show More</button>
//                 )}
//             </div>
//             <div className="w-[400px] mt-24 ml-60 border border-solid border-purple-600 h-[350px] bg-blue-300 p-3">
//                 <h1 className="text-3xl text-purple-700 text-center border-y-2 font-extrabold">PAYMENT HISTORY</h1>
//                 <h1 className="text-xl mt-2 ">Total Price : {total}</h1>
//                 <div className="flex">
//                     <button onClick={handleDiscount} className="btn btn-sm bg-purple-500 mt-3 ">Discount Button</button>
//                     <h1 className="text-xl mt-2 ">  : <input onChange={(e) => setDiscountAmount(e.target.value)} className="p-2 w-[140px]" type="number" /></h1>
//                 </div>

//                 <h1 className="text-xl mt-2 ">Discount Amount : {DiscountAmount}</h1>
//                 <h1 className="text-xl mt-2 ">Total Amount :         {reductAmount} </h1>
//                 <h1 className="text-xl mt-2 ">Total Payment : <input onChange={handlePaymentChange} className="p-2 w-[140px]" type="text" name="payment" /></h1>
//                 <h1 className="text-xl mt-2 ">Due : {paymentAmount}</h1>
//             </div>

//         </div>
//     );
// };

// export default AddToCart;

import { useEffect, useState } from "react";
import AddToDelete from "./AddToDelete";
import useAxiosPublic from "../../component/Hooks/useAxiosPublic";

const AddToCart = () => {
    const axiosPublic = useAxiosPublic();
    const [total, setTotal] = useState(0);
    const [addTo, setAddTo] = useState([]);
    const [DiscountAmount, setDiscountAmount] = useState(0);
    const [reductAmount, setReductAmount] = useState(0);
    const [controll, setControll] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [showAllCarts, setShowAllCarts] = useState(false);

    useEffect(() => {
        axiosPublic.get('/getAddToCard')
            .then(res => setAddTo(res.data))
            .catch(error => console.error("Error fetching data:", error));
    }, [axiosPublic, controll]);

    // Calculate total price
    useEffect(() => {
        const totalPrice = addTo.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(totalPrice);
    }, [addTo]);

    const handleControll = () => {
        setControll(!controll);
    };

    const handleDiscount = () => {
        const discount = total / 100 * parseFloat(DiscountAmount);
        setDiscountAmount(discount);
        const ReductAmount = total - discount;
        setReductAmount(ReductAmount);
    };

    const handlePaymentChange = (e) => {
        const paymentValue = parseFloat(e.target.value);
        const newPaymentAmount = reductAmount - paymentValue;
        setPaymentAmount(newPaymentAmount);
    };

    const handleShowMoreClick = () => {
        setShowAllCarts(true);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-4 bg-black">
            <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {showAllCarts ? (
                        addTo.map((item) => (
                            <AddToDelete key={item._id} item={item} handleControll={handleControll} />
                        ))
                    ) : (
                        addTo.slice(0, 2).map((item) => (
                            <AddToDelete key={item._id} item={item} handleControll={handleControll} />
                        ))
                    )}
                </div>
                {!showAllCarts && addTo.length > 2 && (
                    <div className="flex justify-center mt-4">
                        <button className="text-lg text-green-700 font-bold" onClick={handleShowMoreClick}>Show More</button>
                    </div>
                )}
            </div>
            <div className="w-full lg:w-1/3 bg-blue-300 p-4 border h-[500px] border-purple-600 rounded-lg">
                <h1 className="text-2xl lg:text-3xl text-purple-700 text-center border-b-2 font-extrabold mb-4">PAYMENT HISTORY</h1>
                <h1 className="text-lg lg:text-xl mb-2">Total Price: {total}</h1>
                <div className="flex items-center mb-2">
                    <button onClick={handleDiscount} className="btn btn-sm bg-purple-500 text-white">Discount Button</button>
                    <input onChange={(e) => setDiscountAmount(e.target.value)} className="p-2 w-full ml-2 border" type="number" placeholder="Discount %" />
                </div>
                <h1 className="text-lg lg:text-xl mb-2">Discount Amount: {DiscountAmount}</h1>
                <h1 className="text-lg lg:text-xl mb-2">Total Amount: {reductAmount}</h1>
                <div className="flex items-center mb-2">
                    <label className="text-lg lg:text-xl">Total Payment:</label>
                    <input onChange={handlePaymentChange} className="p-2 w-full ml-2 border" type="text" placeholder="Payment Amount" />
                </div>
                <h1 className="text-lg lg:text-xl mb-2">Due: {paymentAmount}</h1>
            </div>
        </div>
    );
};

export default AddToCart;

