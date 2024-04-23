import React, { useState } from 'react';
import MovieCard from '../Movies/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
import { Keyboard, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import 'swiper/swiper-bundle.min.css';
register();

export default function CardSlider({ items }) {

  return (
    <>
      <div className='relative'>
        <button className="swiper-button-prev rounded-full px-8 py-8 hover:bg-gray-500/25 " style={{ left: '-65px' }}></button>
        <Swiper
          slidesPerView={0}
          spaceBetween={0}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            // When window width is >= 640px
            375: {
              slidesPerView: 1,
            },
            // When window width is >= 640px
            547: {
              slidesPerView: 2,
            },
            // When window width is >= 768px
            821: {
              slidesPerView: 3,
            },
            // When window width is >= 1024px
            1134: {
              slidesPerView: 4,
            },
            // When window width is >= 1280px
            1500: {
              slidesPerView: 5,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} >
              <Link to={`/movies/${item.name}/${item._id}`} key={index}>
                <MovieCard
                  image={item.poster}
                  title={item.name}
                  language={item.language}
                  certificate={item.certificate}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next rounded-full px-8 py-8 hover:bg-gray-500/25 " style={{ right: '-50px' }}></button>
      </div>
    </>
  )
}