import img1 from '../../../../assets/apex1.jpg'
import img2 from '../../../../assets/a2.jpeg'
import img3 from '../../../../assets/a3.jpeg'
import img4 from '../../../../assets/a4.jpeg'
import img5 from '../../../../assets/a5.jpg'
import img6 from '../../../../assets/a6.jpeg'
import { Link } from 'react-router-dom'

const Apex = () => {
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black gap-5 mx-auto">

        <Link to='/products/Apex/Slipper'>
        <div className='border border-solid border-purple-600 mx-auto  p-4'>
            <img className='w-[400px]' src={img1} alt="" />
            <h1 className='text-5xl text-white text-center font-extrabold'>Slipper</h1>
            <h1 className='text-center text-2xl text-purple-500 mt-3'>See More</h1>
         </div>
        </Link>
         <div className='border border-solid border-purple-600 mx-auto p-4'>
            <img className='w-[400px]' src={img2} alt="" />
            <h1 className='text-5xl text-white text-center font-extrabold'>Loafer</h1>
            <h1 className='text-center text-2xl text-purple-500 mt-3'>See More</h1>
         </div>
         <div className='border border-solid border-purple-600 mx-auto p-4'>
            <img className='w-[400px]' src={img3} alt="" />
            <h1 className='text-5xl text-white text-center font-extrabold'>Slide</h1>
            <h1 className='text-center text-2xl text-purple-500 mt-3'>See More</h1>
         </div>
         <div className='border border-solid border-purple-600 mx-auto p-4'>
            <img className='w-[400px]' src={img4} alt="" />
            <h1 className='text-5xl text-white text-center font-extrabold'>Shoe</h1>
            <h1 className='text-center text-2xl text-purple-500 mt-3'>See More</h1>
         </div>
         <div className='border border-solid border-purple-600 mx-auto p-4'>
            <img className='w-[400px] h-[380px]' src={img5} alt="" />
            <h1 className='text-5xl text-white text-center font-extrabold'>Sponge</h1>
            <h1 className='text-center text-2xl text-purple-500 mt-3'>See More</h1>
         </div>
         <div className='border border-solid border-purple-600 mx-auto p-4'>
            <img className='w-[400px]' src={img6} alt="" />
            <h1 className='text-5xl text-white text-center font-extrabold'>Keds</h1>
            <h1 className='text-center text-2xl text-purple-500 mt-3'>See More</h1>
         </div>
                

            

        </div>
    );
};

export default Apex;