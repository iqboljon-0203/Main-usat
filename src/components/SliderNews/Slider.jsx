// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../../features/allNewsSlice';
export default function App() {
    const languageNew = useSelector((state) => state.acceptLanguage.language);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData({
            language:languageNew,
        }))
    }, [dispatch,languageNew])
    const { data } = useSelector((state) => state.allNews)
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                    prevEl: '.news_button_left',
                    nextEl: '.news_button_right',
                }}
                modules={[Navigation]}
                className="mySwiper"
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                }}
                breakpoints={{
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // Qo'shimcha breakpointlar
                    645: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
            >
                {data &&
                    data.map((item) => (
                        
                        <SwiperSlide style={{height:"auto"}} key={item.id}>
                            <li className="slider_news_item">
                                <div className="slider_news_img">
                                    <img
                                        loading="lazy"
                                        src={item.photo}
                                        alt="News info image"
                                    ></img>
                                </div>
                                <div className="slider_news_info">
                                    <Link
                                        style={{
                                            textDecoration:
                                                'underline solid #21466D',
                                        }}
                                        to={`/news/${item.slug}`}
                                    >
                                        <h1 className="slider_news_info_title">
                                            {item.title}
                                        </h1>
                                    </Link>
                                    <p className="slider_news_info_text">
                                        {item&&item?.summary
                                            .split(' ')
                                            .slice(0, 25)
                                            .join(' ') + '...'}
                                    </p>
                                </div>
                            </li>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}
