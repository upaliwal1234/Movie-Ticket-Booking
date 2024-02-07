import React, { useState } from 'react';
import MovieCard from '../Movies/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';


const movieData = [
  {
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
    title: "Fighter",
    language: "Hindi",
    certificate: "UA"
  },
  // Add more movie data objects as needed
];

export default function CardSlider({items}) {
  
  return (
    <>
     {/* <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      navigation
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.language}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper> */}
    </>
  )
}










// {/* <div className="relative overflow-hidden">
//       <div className="absolute inset-y-0 left-0 flex items-center">
//         <button
//           onClick={prevSlide}
//           className="text-gray-500 focus:outline-none hover:text-gray-900"
//         >
//           &lt;
//         </button>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center">
//         <button
//           onClick={nextSlide}
//           className="text-gray-500 focus:outline-none hover:text-gray-900"
//         >
//           &gt;
//         </button>
//       </div>
//       <div className="flex overflow-hidden">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 transform transition-transform ${
//               index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <div className="border border-gray-200 rounded-lg p-4 shadow-md">
//               <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
//               <p className="text-gray-700">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//       {/* <div className='mx-[6rem] gap-4 flex overflow-x-auto '>
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       <MovieCard
//                 image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg"
//                 title="Fighter"
//                 language="Hindi"
//                 certificate="UA"
//             />
//       </div> */} */}