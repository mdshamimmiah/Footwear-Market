import { Link } from "react-router-dom";


const SlipperCard = ({item}) => {
    const {_id,name,description,price,rating,image} = item;

    return (
        <div>
   <div className="card h-[600px] bg-black shadow-xl mt-4 border-purple-600 mx-auto p-4 mb-4 rounded-none">
  <figure><img className="w-[500px] h-[450px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
  <p className="text-white text-2xl font-extrabold">{name}</p>
    <p className="text-white text-xl">${price}</p>
    <div className="card-actions justify-end">
     
    <Link to={`/details/${_id}`}>
    <button className="btn btn-primary text-center mx-auto">Product Details</button>
    </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SlipperCard;



// {
//   path:'/trainerBookedPage/:id/:timeslot',
//   element:<Slot></Slot>,
//   loader: ({ params }) => fetch(`https://fitness-tracker-server-green.vercel.app/trainer/${params.id}`)
// }
