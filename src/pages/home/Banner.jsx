

const Banner = () => {
    return (
      <div className="">
          <div className="relative">
            <img className="lg:h-[600px] h-[500px] w-[1100px] mx-auto p-10 " src="https://i.ibb.co/3R8Ng6K/banner.jpg" alt="" />
          
        </div>
        <div className="absolute -mt-[270px] lg:-mt-[320px] ">
        <h1 className="text-3xl lg:text-5xl text-center text-white ml-8 lg:ml-[114px] w-[360px] lg:w-full ">Walking Around Makes The Mind Feel Good</h1>
        <h1 className="text-sm lg:text-[17px] w-[250px] lg:w-[500px] text-justify ml-[90px]  lg:ml-[375px] text-gray-300">Life is abundant, and life is beautiful. And it's a good place that we're all in, you know, on this earth, if we take care of it. Life is beautiful because it doesn't last. I suppose there are a lot of reasons to be jaded or sarcastic or bitter in life, but I hang on to the reasons why life is beautiful. </h1>
        </div>
      </div>
    );
};

export default Banner;
