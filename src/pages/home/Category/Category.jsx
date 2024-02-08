import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slid1 from '../../../assets/slid5 (1).jpg'
import slid2 from '../../../assets/slid5 (2).jpg'
import slid3 from '../../../assets/slid5 (3).jpg'
import slid4 from '../../../assets/slid5 (4).jpg'
import slid5 from '../../../assets/slid5 (5).jpg'

const Category = () => {
    return (
        <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-14"
      >
        <SwiperSlide><img src={slid1} alt="" /></SwiperSlide>
       
        <SwiperSlide><img src={slid2} alt="" /></SwiperSlide>
       
        <SwiperSlide><img src={slid3} alt="" /></SwiperSlide>
       
        <SwiperSlide><img src={slid4} alt="" /></SwiperSlide>
       
        <SwiperSlide><img src={slid5} alt="" /></SwiperSlide>
       
      </Swiper>
    );
};

export default Category;