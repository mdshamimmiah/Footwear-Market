import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SlipperItem = () => {
  const location = useParams();
  const categories = ['Slipper', 'Loafer', 'Slide', 'Shoe', 'Sponge', 'Keds'];
  const [data, setData] = useState([]);
  console.log(data)
  const [sortedProducts, setSortedProducts] = useState([]);

  const itemsPerPage = 3;

  useEffect(() => {
    fetch('http://localhost:5000/slipperItem')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                setData(data);
            } else {
                console.error('Fetched data is not an array:', data);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}, []);

  

  useEffect(() => {
    if (Array.isArray(data)) {
      const filtered = data.filter(item => item.brand === location.brand && item.category === location.category);
      const sorted = filtered.sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
    }
  }, [location, data]);

  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total number of pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  };

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {getCurrentPageItems().map((product, index) => (
          <div key={index} className="card h-[600px] bg-black shadow-xl mt-4 border-purple-600 mx-auto p-4 mb-4 rounded-none">
            <figure><img className="w-[500px] h-[450px]" src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
              <p className="text-white text-2xl font-extrabold">{product.name}</p>
              <p className="text-white text-xl">${product.price}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${product._id}`}>
                  <button className="btn btn-primary text-center mx-auto">Product Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-5 text-center ml-4 text-2xl'>
        <button className="text-white" onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button className="text-white" onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
        
      </div>
    </div>
  );
};

export default SlipperItem;
