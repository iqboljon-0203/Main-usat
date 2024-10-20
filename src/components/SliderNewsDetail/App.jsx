import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './App.css';
import { useSelector } from 'react-redux';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { newsItem} = useSelector((state) => state.getNews)
    console.log(newsItem);
    
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: '650px',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="myNewsSwiper2"
      >
        {newsItem&&newsItem?.photos?.map((item) => (
            <SwiperSlide>
                <img src={item} alt="News info image" />
            </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="myNewsSwiper"
        style={{height: '188px'}}
      >
        {newsItem&&newsItem?.photos?.map((item) => (
            <SwiperSlide>
                <img style={{height: '100%',objectFit:"cover"}} src={item} alt="News info image" />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
