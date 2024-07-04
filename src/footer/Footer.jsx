import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-shrink-0 mt-32">
                    <img className="w-40" src="https://i.ibb.co/Q92GkgV/shoes-removebg-preview.png" alt="Outstanding Footwear" />
               <h1 className='text-3xl -mt-10 ml-12'><i>fM</i></h1>
    
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-4xl lg:text-6xl">Footwear Market</h1>
                    <p className="mt-4">Explore our latest collection and stay updated with the trends.</p>
                </div>
                <div className="flex space-x-4 mt-8 lg:mt-32 mr-3">
                    <a href="#" className="text-4xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="#" className="text-4xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a href="#" className="text-4xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-300">
                <p>&copy; {new Date().getFullYear()} Outstanding Footwear. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
