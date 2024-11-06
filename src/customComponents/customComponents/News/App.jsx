import React from 'react'
import "./News.css"
// import NextIcon from "../../../assets/logos/right_another.png";
// import PrevIcon from '../../../assets/logos/left_another.png'
import SliderNews from '../../../components/SliderNews/Slider.jsx';
import RightArrow from "../../../assets/logos/chevron-right.svg";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const UsatGallery = ({child}) => {
     const paginationRef = useRef(null); // Pagination uchun referens     
    const {t}=useTranslation();
  return (
      <div
            id='news'
          style={child ? { padding: '0px 20px' } : { padding: '0px 20px' }}
          className="news"
      >
          <div className="news_container">
              <div className="news_top">
                  <h2 className="news_title"><Link  to="/news">{child?t('other_news'):t('news_usat')}</Link></h2>
                  <div className='news_link_wrapper'>
                    <Link className='news_link'  to="/news">Barcha yangiliklar</Link>
                    <img src={RightArrow} alt="Right arrow" />
                  </div>
              </div>
              <SliderNews paginationRef={paginationRef} child={child}></SliderNews>
              <div className="news_buttons">
                      {/* <div className="news_button_left">
                          <img src={PrevIcon} alt="Next icon" />
                      </div> */}
                      <div className='inner_pagination' ref={paginationRef}></div>
                      {/* <div className="news_button_right">
                          <img src={NextIcon} alt="Prev Icon" />
                      </div> */}
                  </div>
          </div>
      </div>
  )
}

export default UsatGallery;
