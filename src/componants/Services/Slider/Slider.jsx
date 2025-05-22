import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Slider.css';
export default function Slider({images}) {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {images.map((img, idx) => (
          <SwiperSlide key={idx} >
            <img src={img} alt={`unit-${idx}`}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
