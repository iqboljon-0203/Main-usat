import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { newsItem} = useSelector((state) => state.getNews)
    const [swiperHeight, setSwiperHeight] = useState(650);
    const [littleSwiperHeight,setLittleSwiperHeight]=useState(188)
    console.log(littleSwiperHeight);
    
     useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSwiperHeight(((window.innerWidth-40)/16)*9);
      }else if(window.innerWidth<=850){
        setSwiperHeight(((window.innerWidth*0.9)/16)*9);
      }else{
        setSwiperHeight(((window.innerWidth*0.8)/16)*9);
      }
    };
    // Call handler once to set initial size
    handleResize();

    // Add event listener to update height on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
     if (window.innerWidth <= 700) {
        setLittleSwiperHeight(((window.innerWidth-40)/64)*9);
      }else if(window.innerWidth<=850){
        setLittleSwiperHeight(((window.innerWidth*0.9)/64)*9);
      }else{
        
        setLittleSwiperHeight(((window.innerWidth*0.8)/64)*9);
        
        
      }
    };

    // Call handler once to set initial size
    handleResize();

    // Add event listener to update height on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: `${swiperHeight}px`,
          borderRadius:"10px",
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
                <img style={{height:"100%"}} src={item} alt="News info image" />
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
        style={{height: `${littleSwiperHeight+20}px`,borderRadius:"10px",}}
      >
        {newsItem&&newsItem?.photos?.map((item) => (
            <SwiperSlide>
                <img style={{height:"100%"}} src={item} alt="News info image" />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
