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
const NewsPage = () => {
    const {t}=useTranslation();
     const languageNew = useSelector((state) => state.acceptLanguage.language)
    const { id } = useParams();
    const dispatch = useDispatch()
    const { newsItem} = useSelector((state) => state.getNews)
    useEffect(() => {
        dispatch(
            fetchNews({
                id: id, 
                language: languageNew,
            })
        )
    }, [dispatch, id,languageNew])
  return (
      <div className="newsPage">
          <Navbar child="true"></Navbar>
          <p className="newsPage_path">
              <Link to="/">{t('sahifa')}{" "}</Link> /{" "}
              <span>{newsItem && newsItem.title}</span>
          </p>
          <h2 className="newsPage_title">{newsItem && newsItem.title}</h2>
          <div className="newsPage_content">
              <div className="newsPage_content_info">
                  <p className="newsPage_content_info_time">
                      {newsItem && newsItem.created_at.slice(0, 10)}
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
              <p className="newsPage_content_text">
                  {newsItem && newsItem.content}
              </p>
          </div>
          <News child="true"></News>
          <MainFooter child="true"></MainFooter>
      </div>
  )
}

export default NewsPage