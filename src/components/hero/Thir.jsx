import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './thir.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import back from '../../assets/b.avif'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'




export default function Thir() {
  return (
    <div className='swip' >
    
      <Swiper
       effect={'coverflow'}
       loop={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}
       className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.e0Qsb4FA4P4otKJDqdO_8AHaEK?w=332&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
