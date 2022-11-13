import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import Slider from './Slider';
import data from '../store/data';

function SwiperHome() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Slider img="https://i.pinimg.com/564x/aa/a1/bb/aaa1bb0cd6a5e47a32a4859552c7ae73.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slider img="https://i.pinimg.com/564x/5c/e0/35/5ce0356d1f9fcc016e9a4358d7d9f3c0.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperHome;
