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
import { useLocation } from "react-router-dom";
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
     const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
   
      const handleCopyPath = () => {
        // Hozirgi sahnaning URL manzilini olish
        const currentPath = window.location.pathname;
      

        // URL manzilini nuxsa olish
        navigator.clipboard.writeText("https://usat.uz" + currentPath)
            .then(() => {
                alert('Nuxsa olindi!');
            })
            .catch(err => {
                console.error('Nuxsa olishda xato:', err);
            });
    };
      const handleShare = () => {
    // Hozirgi sahnaning URL manzilini olish
    const currentUrl = window.location.href;

    // Nuxsa olish
    navigator.clipboard.writeText(currentUrl).then(() => {
      
    }).catch(err => {
      console.error('Nuxsa olishda xato: ', err);
    });

    // Ijtimoiy tarmoqlarga ulashish URL-lari
    const telegramShareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(currentUrl)}`;
    // const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    // const instagramShareUrl = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

    // Ijtimoiy tarmoqdan birini ochish
    window.open(telegramShareUrl, '_blank');
    // Facebook uchun: window.open(facebookShareUrl, '_blank');
    // Instagram uchun: window.open(instagramShareUrl, '_blank');
  };
  const printDiv = () => {
    const printContent = document.getElementById('printable-div');
    const printWindow = window.open('', '_blank');

    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>');
printWindow.document.write(`
  .newsPage_title {
    width: 100%;
    font-family: Steppe Trial;
    font-size: 42px;
    font-weight: 700;
    line-height: 45.8px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #21466d;
    margin: 0 auto;
    text-transform: uppercase;
    margin-bottom: 30px;
}
.printible{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
}
.newsPage_content_info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.newsPage_content_info_time {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    text-align: left;
    color: #21466d59;
}
.newsPage_content_info_author {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    text-align: left;
    color: #21466d59;
}
#newsPage_content_img {
    width: 100%;
    height: 580px;
    
}
    #newsPage_content_img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
}
.newsPage_content_text{
    font-family: Inter;
font-size: 24px;
font-weight: 400;
line-height: 33.6px;
text-align: left;
color: #21466D;
margin-bottom: 30px;
margin-top: 20px;

}
`);
printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();};
    const {newsItem} = useSelector((state) => state.getNews)
  return (
      <div className="newsPage">
          <Navbar child="true"></Navbar>
          <p  className="newsPage_path print-only">
        <Link to="/">{t("sahifa")} </Link>  <div
     className='dot_parent'
    >
      <div
        className='dot_child'
      ></div>
    </div><span><Link to={'/news'}>{t("news_path")}</Link></span><div
      className='dot_parent'
    >
      <div
        className='dot_child'
      ></div>
    </div>{" "}
        <span><Link to={`/news/${newsItem && newsItem?.category?.slug}`}>{newsItem && newsItem?.category?.title}</Link></span>
         <span
      className='dot_parent'
    >
      <span
        className='dot_child'
      ></span>
    </span>{" "}
    <span><Link to={`/news/${newsItem && newsItem?.category?.slug}/${newsItem&&newsItem?.slug}`}>{newsItem && newsItem.title}</Link></span>
      </p>
          <div className="newsPage_content">
            <div id="printable-div" className='printible'>
                  <h2 className="newsPage_title">{newsItem && newsItem.title}</h2>
              <div className="newsPage_content_info">
                  <p className="newsPage_content_info_time">
                      {newsItem && newsItem?.created_at?.slice(0, 10)}
                  </p>
                  <p className="newsPage_content_info_author">
                    <Link to={`/news/${newsItem && newsItem?.category?.slug}`}>{newsItem && newsItem?.category?.title}</Link>
                      
                  </p>
              </div>
              <div id='newsPage_content_img' className="relative w-full pb-[56.25%]">
                   <img
                  className="absolute top-0 left-0 rounded-xl w-full h-full object-cover"
                  src={newsItem && newsItem.photo}
                  alt="News image"
                />
              </div>
              <div className='newsPage_content_text'  dangerouslySetInnerHTML={{ __html: newsItem && newsItem.content }} />
            </div>
              
              {newsItem && newsItem?.photos?.length > 0 && (
                <SliderNewsDetail></SliderNewsDetail>
              )}
               <div className='newsPage_content_buttons'>
                    <div className='newsPage_content_buttons_left'>
                        <button onClick={handleShare}><img src={ShareIcon} alt="Share icon" />{t("share_news")}</button>
                        <button onClick={handleCopyPath}><img src={CopyIcon} alt="Copy icon" />{t("copy_news")}</button>
                    </div>
                    <button  onClick={printDiv}>
                        <img src={PrintIcon} alt="Print icon" />
                       {t("print_news")}
                    </button>
               </div>
          </div>
         
          <News child={name}></News>
          <MainFooter  child="true"></MainFooter>
      </div>
  )
}

export default NewsPage