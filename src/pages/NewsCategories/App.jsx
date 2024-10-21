import React from "react";
import Navbar from "../../components/Navbar/App";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import MainFooter from '../../customComponents/customComponents/MainFooter/App';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllCategories } from "../../features/categoriesAllSlice";
import { useLocation } from "react-router-dom";
const NewsCategories = () => {
  const { t } = useTranslation();
  const location=useLocation();
  console.log(location.pathname);
  
    const languageNew = useSelector((state) => state.acceptLanguage.language);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllCategories({
            language:languageNew,
        }))
    }, [dispatch,languageNew])
    const { data } = useSelector((state) => state.allCategories)
    console.log(data);
    
  return (
    <div className="newsCategories">
      <Navbar child="true"></Navbar>
      <p  className="newsCategories_path">
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
                  <Link style={{textDecoration:"underline solid #21466D"}} to={`${location.pathname}/${item&&item.slug}/${item.news_list&&item.news_list.length>0&&item?.news_list[0]?.slug}`}>{item.news_list&&item.news_list.length>0&&item.news_list[0].title}</Link>    
                </h3>
                <p className="">
                    {`${item.news_list&&item.news_list.length>0&&item?.news_list[0]?.summary.split(" ").slice(0, 20).join(" ")}...`}
                </p>
                <div>
                  <h4><Link to={`/news/${item.slug}`}>{item.news_list&&item.news_list.length>0&&item?.news_list[0]?.category.title}</Link></h4>
                  
                  <p>{item.news_list&&item.news_list.length>0&&item?.news_list[0]?.created_at.slice(0, 10)}</p>
                </div>
              </div>
              <div className="newsCategories_list_item_content_left_img">
                <img src={item.news_list&&item.news_list.length>0&&item?.news_list[0]?.photo} alt="Students image" />
              </div>
            </div>
            <div className="newsCategories_list_item_content_right">
             
              {item.news_list&&item.news_list.length>0&&item?.news_list.slice(1).map((child) => {
                return (
                     <div className="newsCategories_list_item_content_right_item">
                <div className="newsCategories_list_item_content_right_item_img">
                  <img src={child&&child.photo} alt="Students image" />
                </div>
                <div className="newsCategories_list_item_content_right_item_wrapper">
                  {" "}
                  <h3 className="">
                    <Link style={{textDecoration:"underline solid #21466D"}} to={`${location.pathname}/${item&&item.slug}/${child.slug}`}>{child&&child.title}</Link>
                  </h3>
                  <p className="">
                    {`${child&&child.summary.split(" ").slice(0, 25).join(" ")}...`}
                  </p>
                  <div>
                    <h4><Link to={`/news/${item.slug}`}>{child&&child.category.title}</Link></h4>
                    <p>{child&&child.created_at.slice(0, 10)}</p>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
          <Link to={`/news/${item.slug}`}>
        <button className="newsCategories_list_button">Barcha yangiliklarni ko’rish</button>
        </Link>
        </li>
            )
        })}
        
        
      </ul>
       <MainFooter child="true"></MainFooter>
    </div>
  );
};

export default NewsCategories;
