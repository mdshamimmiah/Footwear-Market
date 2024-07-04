import { useEffect, useState } from "react";

const FootwearGallary = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    console.log(images);

    useEffect(() => {
        fetch('http://localhost:5000/album')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0 && data[0].images) {
                    setImages(data[0].images);
                }
            })
            .catch(error => {
                console.error("Error fetching data", error);
                setError(error);
            });
    }, []);

    return (
        <div className="bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mx-auto">
          {error && <p>Error fetching data: {error.message}</p>}
            {images.length > 0 ? (
                images.map(image => (
                    <div key={image.id} className="card card-compact mt-8 bg-base-100 w-96 h-80  border mx-auto border-black  rounded-none ">
                        <figure>
                            <img className="w-[420px] h-[350px]" src={image.url} alt="Footwear" />
                        </figure>
                    </div>
                ))
            ) : (
                <p>No images available</p>
            )}
          </div>
        </div>
    );
};

export default FootwearGallary;
