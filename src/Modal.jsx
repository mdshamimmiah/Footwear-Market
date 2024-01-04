import { Link } from "react-router-dom";


const Modal = () => {
const {id} = Modal;
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-sm bg-purple-600 mx-auto ml-[100px] text-white w-[100px] text-[18px]" onClick={()=>document.getElementById('my_modal_5').showModal()}>Click Me</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-blue-400">
    <h3 className="font-bold text-lg"></h3>
    <p className="py-4 text-center">Please Open This Page</p>
    <div className="modal-action">
      <form method="dialog" className="mx-auto gap-3">
        {/* if there is a button in form, it will close the modal */}
       <Link to={`/lotto/${id}`}> <button className="btn mr-3">Open</button></Link>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;