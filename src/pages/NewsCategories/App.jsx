import React from "react";
import Navbar from "../../components/Navbar/App";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import MainFooter from '../../customComponents/customComponents/MainFooter/App';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllCategories } from "../../features/categoriesAllSlice";
const NewsCategories = () => {
  const { t } = useTranslation();
    const languageNew = useSelector((state) => state.acceptLanguage.language);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllCategories({
            language:languageNew,
        }))
    }, [dispatch,languageNew])
    const { data } = useSelector((state) => state.allCategories)
    
  return (
    <div className="newsCategories">
      <Navbar child="true"></Navbar>
      <p  className="newsItem_path">
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
    </div><span>Yangiliklar</span> 
        
      </p>
      <h2 className="newsCategories_title">Universitet yangiliklari</h2>
      <ul className="newsCategories_list">
        {data&&data.map((item) => {
            
            return (
                <li className="newsCategories_list_item">
          <div className="newCategories_list_item_top">
            <h2 className="newsCategories_list_item_title"><Link to={`/news/${item.slug}`}>{item&&item.title}</Link></h2>
            <Link className="newsCategories_list_item_link" to={`/news/${item.slug}`}>
              Barcha yangiliklarni ko’rish
            </Link>
          </div>
          <div className="newsCategories_list_item_content">
            <div className="newsCategories_list_item_content_left">
              <div className="newsCategories_list_item_content_left_wrapper">
                <h3 className="">
                    {item&&item?.news_list[0]?.title}
                </h3>
                <p className="">
                    {item&&item?.news_list[0]?.summary}
                </p>
                <div>
                  <h4><Link to={`/news/${item.slug}`}>{item&&item?.news_list[0]?.category.title}</Link></h4>
                  
                  <p>{item&&item?.news_list[0]?.created_at.slice(0, 10)}</p>
                </div>
              </div>
              <div className="newsCategories_list_item_content_left_img">
                <img src={item&&item?.news_list[0]?.photo} alt="Students image" />
              </div>
            </div>
            <div className="newsCategories_list_item_content_right">
             
              {item&&item?.news_list.slice(1).map((item) => {
                return (
                     <div className="newsCategories_list_item_content_right_item">
                <div className="newsCategories_list_item_content_right_item_img">
                  <img src={item&&item.photo} alt="Students image" />
                </div>
                <div className="newsCategories_list_item_content_right_item_wrapper">
                  {" "}
                  <h3 className="">
                    {item&&item.title}
                  </h3>
                  <p className="">
                    {item&&item.summary}
                  </p>
                  <div>
                    <h4><Link to={`/news/${item.slug}`}>{item&&item.category.title}</Link></h4>
                    <p>{item&&item.created_at.slice(0, 10)}</p>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </li>
            )
        })}
        
      </ul>
       <MainFooter child="true"></MainFooter>
    </div>
  );
};

export default NewsCategories;
