import React from "react";
import "./App.css";
import Navbar from "../../components/Navbar/App";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainFooter from "../../customComponents/customComponents/MainFooter/App";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCategory } from "../../features/categorySlice";
import { useLocation } from "react-router-dom";
const NewsItem = () => {
  const { t } = useTranslation();
   const languageNew = useSelector((state) => state.acceptLanguage.language)
    const { slug } = useParams();
    const location=useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            fetchCategory({
                slug: slug, 
                language: languageNew,
            })
        )
    }, [dispatch, slug,languageNew])
     const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    const {categoryItem}=useSelector((state)=>state.category);
    
  return (
    <div className="newsItem">
      <Navbar child="true"></Navbar>
      <p  className="newsItem_path">
        <Link to="/">{t("sahifa")} </Link>  <div
      className="dot_parent"
    >
      <div
       className="dot_child"
      ></div>
    </div><span><Link to={"/news"}>{t("news_path")}</Link></span>  <div
      className="dot_parent"
    >
      <div
        className="dot_child"
      ></div>
    </div>{" "}
        <span>{categoryItem&&categoryItem.title}</span>
      </p>
      <h2 className="newsItem_title">{categoryItem&&categoryItem.title}</h2>
      <ul className="newsItem_list">
        {categoryItem&&categoryItem.news_list?.map((item)=>{
          return (
            <li className="newsItem_list_item">
          <div className="newsItem_list_item_content">
            <div className="newsItem_list_item_content_img">
              <img src={item&&item.photo} alt="Students image" />
            </div>
            <div className="newsItem_list_item_content_wrapper">
              {" "}
              <h3 className="">
               <Link style={{textDecoration:"underline solid #21466D"}} to={`${location.pathname}/${item&&item.slug}`}>{item&&item.title}</Link>
              </h3>
              <p className="">
                {`${item&&item.summary.split(" ").slice(0, 20).join(" ")}...`}
              </p>
              <div>
                <h4>{item&&item.category.title}</h4>
                <p>{item&&item.created_at.slice(0, 10)}</p>
              </div>
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

export default NewsItem;
