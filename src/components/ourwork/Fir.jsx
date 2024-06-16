import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './fir.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Fir() {
  return (
    <div className='secswipp' >
     
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/09/venue-banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://lotus-events.co.uk/wp-content/uploads/2021/05/banner-7.jpg" alt="" /></SwiperSlide>
        
      </Swiper>

      <div className="swhp">
      <h1 >PREMIUM VENUES AT YOUR <br />
             FINGER TIPS</h1>
<p> Start your event journey with us by searching and selecting the right venue to hire in London, suitable for your <br /> event type, right for your brand and fulfilling your event objectives</p><br /><br /><button>Make An Enquiry</button></div>

    </div>
  );
}
