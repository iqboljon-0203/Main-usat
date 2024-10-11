// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import "./FooterSlide.css"
import { useTranslation } from 'react-i18next';

// import required modules
import {  Autoplay } from 'swiper/modules';
export default function App() {
    const {t}=useTranslation();

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper_footer"
                autoplay={{
                    delay: 2500, // 2.5 seconds delay between slides
                    disableOnInteraction: false, // Autoplay will not be disabled after user interaction
                }}
                modules={[Autoplay]}
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                }}
                breakpoints={{
                    1100: {
                        slidesPerView: 2,
                    },
                    // Qo'shimcha breakpointlar
                    645: {
                        slidesPerView: 2,
                    },
                    580: {
                        slidesPerView: 1,
                    },
                }}
            >
                <SwiperSlide style={{ backgroundColor: 'transparent',height:"auto" }}>
                    <li style={{height:"100%"}} className="item">
                        <p>{t('info1')}</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'transparent',height:"auto" }}>
                    <li style={{height:"100%"}} className="item">
                        <p>{t('info2')}</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'transparent',height:"auto" }}>
                    <li style={{height:"100%"}} className="item">
                        <p>{t('info3')}</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: 'transparent',height:"auto" }}>
                    <li style={{height:"100%"}} className="item">
                        <p>{t('info4')}</p>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    )
}