// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './App.css'
import Avatar from '../../assets/logos/avatar.svg';
import AvatarWoman from "../../assets/logos/avatar_woman.png"
// import required modules
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
export default function App() {
    const {t}=useTranslation()
    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item1')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={Avatar}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    Ruslan
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item2')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={AvatarWoman}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">Iroda</h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item3')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={Avatar}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    Ravshan
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    {' '}
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item4')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={AvatarWoman}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">Aziza</h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item5')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={AvatarWoman}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">Odina</h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
