import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import data from '../store/data';
import MoviesItem from '../category/MoviesItem';
function TopRatedSlider() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <MoviesItem />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default TopRatedSlider;
