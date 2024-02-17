import React, { useState } from 'react';
import MovieCard from '../Movies/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { Keyboard, Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';


// const movieData = [
//   {
//     image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
//     title: "Fighter",
//     language: "Hindi",
//     certificate: "UA"
//   },
//   // Add more movie data objects as needed
// ];

export default function CardSlider({ items }) {

  return (
    <>
      <div className='relative'>
        <div className="swiper-button-prev rounded-full px-8 py-8 hover:bg-gray-500/25 " style={{ left: '-65px' }}></div>
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
              <div>
                <div className="relative h-[380px] w-[220px]  flex justify-center rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full rounded-md"
                  />
                </div>
                <div className="ml-[2.5rem] my-4">
                  <h1 className=" my-2 text-xl font-bold text-gray-900">{item.title}</h1>
                  <h1 className=" my-1 text-sm font-thin text-gray-700">{item.certificate}</h1>
                  <h1 className=" my-1 text-sm font-thin text-gray-700">{item.language}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next rounded-full px-8 py-8 hover:bg-gray-500/25 " style={{ right: '-50px' }}></div>
      </div>
    </>
  )
}










