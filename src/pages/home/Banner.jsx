import img from '../../assets/banner10.jfif'

const Banner = () => {
    return (
      <div data-aos="fade-up-left">
          <div className="relative">
            <img className="lg:h-[600px] h-[500px] w-[1400px] mx-auto p-10 " src={img} alt="" />
          
        </div>
        <div className="absolute -mt-[270px] lg:-mt-[320px] ">
        <h1 className="text-3xl lg:text-5xl text-center text-gray-400 ml-8 lg:ml-[114px] w-[360px] lg:w-full font-bold ">Walking Around Makes The Mind Feel Good</h1>
        <h1 className="text-sm lg:text-xl w-[250px] lg:w-[500px] text-justify ml-[90px]  font-bold lg:ml-[375px] text-fuchsia-400"> </h1>
        </div>
        
      </div>
    );
};

export default Banner;
