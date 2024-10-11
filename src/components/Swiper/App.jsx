// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useState,useRef,useEffect } from 'react';
// import required modules
import { Pagination } from 'swiper/modules';
import CardBachelor from '../CardBachelor/App';
export default function App() {
    const Language=localStorage.getItem("i18nextLng")||'uz';
    const [showPagination, setShowPagination] = useState(false);
    const swiperRef = useRef(null);
     const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 800) {
            setShowPagination(true);
        } else {
            setShowPagination(false);
        }
    };

    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const CONTRACT_INFO_UZ = {
        'Maktabgacha ta’lim': {
            Kunduzgi: '12.9',
            Kechki: '7.9',
            Sirtqi: '12.6',
        },
        Tarix: {
            Kunduzgi: '16.8',
            Kechki: '7.9',
            Sirtqi: '12.9',
        },
        'Kompyuter injiniringi': {
            Kunduzgi: '15.8',
            Kechki: '12.6',
            Sirtqi: '12.9',
        },
        'Dasturiy injiniring': {
            Kunduzgi: '16.8',
            Kechki: '8.8',
            Sirtqi: '12.9',
        },
        'Moliya va moliyaviy texnologiyalar': {
            Kunduzgi: '19.8',
            Kechki: '14.5',
            Sirtqi: '14.85',
        },

        'Boshlang’ich ta’lim': {
            Kunduzgi: '16.8',
            Kechki: '12.6',
            Sirtqi: '12.6',
        },

        'Buxgalteriya hisobi': {
            Kunduzgi: '19.8',
            Kechki: '14.5',
            Sirtqi: '14.85',
        },

        'Turizm va mehmondoʻstlik': {
            Kunduzgi: '16.8',
            Kechki: '8.8',
            Sirtqi: '12.6',
        },

        Iqtisodiyot: {
            Kunduzgi: '19.8',
            Kechki: '14.5',
            Sirtqi: '14.85',
        },
        Psixologiya: {
            Kunduzgi: '16.8',
            Kechki: '12.6',
            Sirtqi: '12.9',
        },
        Logistika: {
            Kunduzgi: '16.8',
            Kechki: '12.6',
            Sirtqi: '12.9',
        },

        'Bank ishi': {
            Kunduzgi: '19.8',
            Kechki: '14.5',
            Sirtqi: '14.85',
        },
        'Ijtimoiy ish': {
            Kunduzgi: '15.8',
            Kechki: '12.6',
            Sirtqi: '12.6',
        },
        'Maxsus pedagogika': {
            Kunduzgi: '16.8',
            Kechki: '12.6',
        },
        'Xorijiy til va adabiyoti': {
            Kunduzgi: '16.8',
            Kechki: '12.6',
        },
        'O‘zbek tili va adabiyoti': {
            Kunduzgi: '16.8',
            Kechki: '12.6',
        },

        Matematika: {
            Kunduzgi: '15.8',
            Kechki: '12.6',
        },

        Arxitektura: {
            Kunduzgi: '17.8',
            Kechki: '14.5',
        },
    };
    const CONTRACT_INFO_RU = {
        'Дошкольное образование': {
            Дневное: '12.9',
            Вечернее: '7.9',
            Заочное: '12.6',
        },
        История: {
            Дневное: '16.8',
            Вечернее: '7.9',
            Заочное: '12.9',
        },
        'Компьютерная инженерия': {
            Дневное: '15.8',
            Вечернее: '12.6',
            Заочное: '12.9',
        },
        'Программная инженерия': {
            Дневное: '16.8',
            Вечернее: '8.8',
            Заочное: '12.9',
        },
        'Финансы и финансовые технологии': {
            Дневное: '19.8',
            Вечернее: '14.5',
            Заочное: '14.85',
        },

        'Начальное образование': {
            Дневное: '16.8',
            Вечернее: '12.6',
            Заочное: '12.6',
        },

        'Бухгалтерский учет': {
            Дневное: '19.8',
            Вечернее: '14.5',
            Заочное: '14.85',
        },

        'Туризм и гостеприимство': {
            Дневное: '16.8',
            Вечернее: '8.8',
            Заочное: '12.6',
        },

        Экономика: {
            Дневное: '19.8',
            Вечернее: '14.5',
            Заочное: '14.85',
        },
        Психология: {
            Дневное: '16.8',
            Вечернее: '12.6',
            Заочное: '12.9',
        },
        Логистика: {
            Дневное: '16.8',
            Вечернее: '12.6',
            Заочное: '12.9',
        },

        'Банковское дело': {
            Дневное: '19.8',
            Вечернее: '14.5',
            Заочное: '14.85',
        },
        'Социальная работа': {
            Дневное: '15.8',
            Вечернее: '12.6',
            Заочное: '12.6',
        },
        'Специальная педагогика': {
            Дневное: '16.8',
            Вечернее: '12.6',
        },
        'Иностранный язык и литература': {
            Дневное: '16.8',
            Вечернее: '12.6',
        },
        'Узбекский язык и литература': {
            Дневное: '16.8',
            Вечернее: '12.6',
        },

        Математика: {
            Дневное: '15.8',
            Вечернее: '12.6',
        },

        Архитектура: {
            Дневное: '17.8',
            Вечернее: '14.5',
        },
    };
    const CONTRACT_INFO_EN = {
        'Preschool Education': {
            FullTime: '12.9',
            Evening: '7.9',
            PartTime: '12.6',
        },
        History: {
            FullTime: '16.8',
            Evening: '7.9',
            PartTime: '12.9',
        },
        'Computer Engineering': {
            FullTime: '15.8',
            Evening: '12.6',
            PartTime: '12.9',
        },
        'Software Engineering': {
            FullTime: '16.8',
            Evening: '8.8',
            PartTime: '12.9',
        },
        'Finance and Financial Technologies': {
            FullTime: '19.8',
            Evening: '14.5',
            PartTime: '14.85',
        },

        'Primary Education': {
            FullTime: '16.8',
            Evening: '12.6',
            PartTime: '12.6',
        },

        Accounting: {
            FullTime: '19.8',
            Evening: '14.5',
            PartTime: '14.85',
        },

        'Tourism and Hospitality': {
            FullTime: '16.8',
            Evening: '8.8',
            PartTime: '12.6',
        },

        Economics: {
            FullTime: '19.8',
            Evening: '14.5',
            PartTime: '14.85',
        },
        Psychology: {
            FullTime: '16.8',
            Evening: '12.6',
            PartTime: '12.9',
        },
        Logistics: {
            FullTime: '16.8',
            Evening: '12.6',
            PartTime: '12.9',
        },

        Banking: {
            FullTime: '19.8',
            Evening: '14.5',
            PartTime: '14.85',
        },
        'Social Work': {
            FullTime: '15.8',
            Evening: '12.6',
            PartTime: '12.6',
        },
        'Special Pedagogy': {
            FullTime: '16.8',
            Evening: '12.6',
        },
        'Foreign Language and Literature': {
            FullTime: '16.8',
            Evening: '12.6',
        },
        'Uzbek Language and Literature': {
            FullTime: '16.8',
            Evening: '12.6',
        },

        Mathematics: {
            FullTime: '15.8',
            Evening: '12.6',
        },

        Architecture: {
            FullTime: '17.8',
            Evening: '14.5',
        },
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={showPagination ? { clickable: true } : false}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Pagination]}
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        
                        
                    },
                    800: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        
                       
                    },
                    1000: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                }}
            >
                {Language === 'uz'
                    ? Object.keys(CONTRACT_INFO_UZ).map((key, index) => (
                          <SwiperSlide
                              key={index}
                              style={{
                                  display: 'flex',
                                  height: 'auto', // Automatically adjust based on content
                                  flexDirection: 'column',
                                  justifyContent: 'stretch', // Stret
                              }}
                          >
                              <CardBachelor
                                  title={key}
                                  priceKun={CONTRACT_INFO_UZ[key].Kunduzgi}
                                  priceKech={CONTRACT_INFO_UZ[key].Kechki}
                                  priceSirt={CONTRACT_INFO_UZ[key].Sirtqi}
                                  style={{
                                      flex: 1,
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'space-between', // Ensures the content fills the SwiperSlide height
                                  }}
                              />
                          </SwiperSlide>
                      ))
                    : Language === 'ru'
                      ? Object.keys(CONTRACT_INFO_RU).map((key, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    display: 'flex',
                                    height: 'auto', // Automatically adjust based on content
                                    flexDirection: 'column',
                                    justifyContent: 'stretch', // Stret
                                }}
                            >
                                <CardBachelor
                                    title={key}
                                    priceKun={CONTRACT_INFO_RU[key].Дневное}
                                    priceKech={CONTRACT_INFO_RU[key].Вечернее}
                                    priceSirt={CONTRACT_INFO_RU[key].Заочное}
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', // Ensures the content fills the SwiperSlide height
                                    }}
                                />
                            </SwiperSlide>
                        ))
                      : Object.keys(CONTRACT_INFO_EN).map((key, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    display: 'flex',
                                    height: 'auto', // Automatically adjust based on content
                                    flexDirection: 'column',
                                    justifyContent: 'stretch', // Stret
                                }}
                            >
                                <CardBachelor
                                    title={key}
                                    priceKun={CONTRACT_INFO_EN[key].FullTime}
                                    priceKech={CONTRACT_INFO_EN[key].Evening}
                                    priceSirt={CONTRACT_INFO_EN[key].PartTime}
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', // Ensures the content fills the SwiperSlide height
                                    }}
                                />
                            </SwiperSlide>
                        ))}
            </Swiper>
        </>
    );
}