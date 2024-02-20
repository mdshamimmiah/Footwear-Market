import { Link } from "react-router-dom";

const SlipperCard = ({ items }) => {
  // Check if items is not an array or if it's empty
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items available</div>;
  }

  // Sort the items based on price from small to large
  const sortedItems = [...items].sort((a, b) => a.price - b.price);

  return (
    <div>
      {sortedItems.map((item) => (
        <div key={item._id} className="card h-[600px] bg-black shadow-xl mt-4 border-purple-600 mx-auto p-4 mb-4 rounded-none">
          <figure><img className="w-[500px] h-[450px]" src={item.image} alt="Shoes" /></figure>
          <div className="card-body">
            <p className="text-white text-2xl font-extrabold">{item.name}</p>
            <p className="text-white text-xl">${item.price}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${item._id}`}>
                <button className="btn btn-primary text-center mx-auto">Product Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlipperCard;
