// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import './App.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import GirlImage from '../../assets/logos/girl.png'
import GirlsImage from '../../assets/logos/girls.png'

import TraditionImage from '../../assets/logos/tradition.png'
import LessonImage from '../../assets/logos/lesson.png'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper/modules'
export default function App() {
    const { t } = useTranslation()
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                    prevEl: '.usat_gallery_button_left',
                    nextEl: '.usat_gallery_button_right',
                }}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // Qo'shimcha breakpointlar
                    545: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <li className="slider_gallery_item">
                        <div className="slider_gallery_img">
                            <img
                                loading="lazy"
                                src={GirlImage}
                                alt="Usat"
                            ></img>
                            <div className="slider_gallery_info">
                                birinchi qor yog’gan kun studentlar qor
                                o’ynashganda
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="slider_gallery_item">
                        <div className="slider_gallery_img">
                            <img
                                loading="lazy"
                                src={GirlsImage}
                                alt="Usat"
                            ></img>
                            <div className="slider_gallery_info">
                                birinchi qor yog’gan kun studentlar qor
                                o’ynashganda
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="slider_gallery_item">
                        <div className="slider_gallery_img">
                            <img
                                loading="lazy"
                                src={TraditionImage}
                                alt="Usat"
                            ></img>
                            <div className="slider_gallery_info">
                                birinchi qor yog’gan kun studentlar qor
                                o’ynashganda
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="slider_gallery_item">
                        <div className="slider_gallery_img">
                            <img
                                loading="lazy"
                                src={LessonImage}
                                alt="Usat"
                            ></img>
                            <div className="slider_gallery_info">
                                birinchi qor yog’gan kun studentlar qor
                                o’ynashganda
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="slider_gallery_item">
                        <div className="slider_gallery_img">
                            <img
                                loading="lazy"
                                src={TraditionImage}
                                alt="Usat"
                            ></img>
                            <div className="slider_gallery_info">
                                birinchi qor yog’gan kun studentlar qor
                                o’ynashganda
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className="slider_gallery_item">
                        <div className="slider_gallery_img">
                            <img
                                loading="lazy"
                                src={LessonImage}
                                alt="Usat"
                            ></img>
                            <div className="slider_gallery_info">
                                birinchi qor yog’gan kun studentlar qor
                                o’ynashganda
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    )
}