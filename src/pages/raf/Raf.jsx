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

    useEffect(() => {
        axiosPublic.get('/getAddToCard')
            .then(res => setAddTo(res.data));
    }, [axiosPublic, controll]);

    useEffect(() => {
        const totalPrice = addTo.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(totalPrice);
    }, [addTo]);

    const handleControll = () => {
        setControll(!controll);
    }

    const handleDiscount = () => {
        const discount = total / 100 * parseFloat(DiscountAmount);
        const ReductAmount = total - discount;
        setReductAmount(ReductAmount);
        setDiscountAmount(discount);
    }

    const handlePaymentChange = (e) => {
        const paymentValue = parseFloat(e.target.value);
        const newPaymentAmount = reductAmount - paymentValue;
        setPaymentAmount(newPaymentAmount);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-20 w-[800px]">
                {addTo.map((item) => (
                    <AddToDelete key={item._id} item={item} handleControll={handleControll} />
                ))}
            </div>
            <div className="w-[400px] mt-24 ml-60 border border-solid border-purple-600 h-[350px] bg-blue-300 p-3">
                <h1 className="text-3xl text-purple-700 text-center border-y-2 font-extrabold">PAYMENT HISTORY</h1>
                <h1 className="text-xl mt-2 ">Total Price : {total}</h1>
                <div className="flex">
                    <button onClick={handleDiscount} className="btn btn-sm bg-purple-500 mt-3 ">Discount Button</button>
                    <h1 className="text-xl mt-2 "> : <input onChange={(e) => setDiscountAmount(e.target.value)} className="p-2 w-[140px]" type="number" /></h1>
                </div>

                <h1 className="text-xl mt-2 ">Discount Amount : {DiscountAmount}</h1>
                <h1 className="text-xl mt-2 ">Total Amount :         {reductAmount} </h1>
                <h1 className="text-xl mt-2 ">Total Payment : <input onChange={handlePaymentChange} className="p-2 w-[140px]" type="text" /></h1>
                <h1 className="text-xl mt-2 ">Due : {paymentAmount}</h1>
            </div>
        </div>
    );
};

export default AddToCart;
