// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import './Partners.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import TDIU from "../../assets/logos/tdiu.png"
import TDMI from "../../assets/logos/tmi.png"
import UnicumLogo from '../../assets/logos/unicum_logo.svg'
import DjangoLogo from '../../assets/logos/django_logo.svg'
// import required modules

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
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
                    <div className="slider_partners_item">
                        <img src={TDMI} alt="TDMI logo" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider_partners_item">
                        <img src={TDIU} alt="TDIU logo" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider_partners_item slider_partners_item_new">
                        <img src={UnicumLogo} alt="Unicum logo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_partners_item slider_partners_item_new">
                        <img src={DjangoLogo} alt="Django logo" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
