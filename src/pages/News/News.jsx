import React from 'react'
import Navbar from "../../components/Navbar/App";
import "./News.css";
import { useDispatch, useSelector } from 'react-redux'
import {fetchNews} from '../../features/newsSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import News from "../../customComponents/customComponents/News/App";
import MainFooter from '../../customComponents/customComponents/MainFooter/App';
import { Link } from 'react-router-dom';
import SliderNewsDetail from '../../components/SliderNewsDetail/App';
import ShareIcon from "../../assets/logos/share.svg";
import CopyIcon from "../../assets/logos/copy.svg";
import PrintIcon from "../../assets/logos/pechat.svg";
const NewsPage = () => {
    const {t}=useTranslation();
     const languageNew = useSelector((state) => state.acceptLanguage.language)
    const { name } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            fetchNews({
                slug: name, 
                language: languageNew,
            })
        )
    }, [dispatch, name,languageNew])
    const { newsItem} = useSelector((state) => state.getNews)

      const customStyle = {
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '33.6px',
    textAlign: 'left',
    color: '#21466d',
    marginBottom:"30px",
    marginTop:"30px",
  };
  return (
      <div className="newsPage">
          <Navbar child="true"></Navbar>
          <p  className="newsPage_path">
        <Link to="/">{t("sahifa")} </Link>  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20px',
        height: '20px', // Butun ekran bo'yi o'lchov uchun
        margin:"0px 10px",
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#21466D',
          borderRadius: '50%',
          
        }}
      ></div>
    </div><span><Link to={'/news'}>Yangiliklar</Link></span>  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20px',
        height: '20px', // Butun ekran bo'yi o'lchov uchun
        margin:"0px 10px",
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#21466D',
          borderRadius: '50%',
        }}
      ></div>
    </div>{" "}
        <span><Link to={`/news/${newsItem && newsItem?.category?.slug}`}>{newsItem && newsItem?.category?.title}</Link></span>
         <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20px',
        height: '20px', // Butun ekran bo'yi o'lchov uchun
        margin:"0px 10px",
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#21466D',
          borderRadius: '50%',
          
        }}
      ></div>
    </div>{" "}
    <span><Link to={`/news/${newsItem && newsItem?.category?.slug}/${newsItem&&newsItem?.slug}`}>{newsItem && newsItem.title}</Link></span>
      </p>
          <h2 className="newsPage_title">{newsItem && newsItem.title}</h2>
          <div className="newsPage_content">
              <div className="newsPage_content_info">
                  <p className="newsPage_content_info_time">
                      {newsItem && newsItem?.created_at?.slice(0, 10)}
                  </p>
                  <p className="newsPage_content_info_author">
                      {t('author')} : {newsItem && newsItem?.author?.first_name}{' '}
                      {newsItem && newsItem?.author?.last_name}
                  </p>
              </div>
              <img
                  className="newsPage_content_img"
                  src={newsItem && newsItem.photo}
                  alt="News image"
              />
              <div style={customStyle} dangerouslySetInnerHTML={{ __html: newsItem && newsItem.content }} />
               <SliderNewsDetail></SliderNewsDetail>
               <div style={customStyle} dangerouslySetInnerHTML={{ __html: newsItem && newsItem.content2 }} />
               <div className='newsPage_content_buttons'>
                    <div className='newsPage_content_buttons_left'>
                        <button><img src={ShareIcon} alt="Share icon" />Ulashish</button>
                        <button><img src={CopyIcon} alt="Copy icon" />Yangilikdan nusxa olish</button>
                    </div>
                    <button>
                        <img src={PrintIcon} alt="Print icon" />
                        Chop etish
                    </button>
               </div>
          </div>
         
          <News child="true"></News>
          <MainFooter child="true"></MainFooter>
      </div>
  )
}

export default NewsPage