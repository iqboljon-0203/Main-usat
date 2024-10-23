import React from 'react'
import "./News.css"
import NextIcon from "../../../assets/logos/right_another.png";
import PrevIcon from '../../../assets/logos/left_another.png'
import SliderNews from '../../../components/SliderNews/Slider.jsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const UsatGallery = ({child}) => {
    const {t}=useTranslation();
  return (
      <div
            id='news'
          style={child ? { padding: '0px 20px' } : { padding: '0px 20px' }}
          className="news"
      >
          <div className="news_container">
              <div className="news_top">
                  <h2 className="news_title"><Link style={{textDecoration:"underline solid #21466D"}} to="/news">{child?t('other_news'):t('news_usat')}</Link></h2>
                  <div className="news_buttons">
                      <div className="news_button_left">
                          <img src={PrevIcon} alt="Next icon" />
                      </div>
                      <div className="news_button_right">
                          <img src={NextIcon} alt="Prev Icon" />
                      </div>
                  </div>
              </div>
              <SliderNews></SliderNews>
          </div>
      </div>
  )
}

export default UsatGallery;
