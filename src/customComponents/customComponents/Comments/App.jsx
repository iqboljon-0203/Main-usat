import React from 'react'
import "./App.css";
import SliderComments from "../../../components/SliderComments/App";
import { useTranslation } from 'react-i18next';
const Comments = () => {
    const {t}=useTranslation();
  return (
      <div className="comments">
          <div className="comments_container">
              <div className="comments_left">
                    <SliderComments></SliderComments>
              </div>
              <div className="comments_right">
                  <div>
                      <h2 className="comments_title">
                          {t('comments_title')}
                      </h2>
                      <p className="comments_text">
                          {t('comments_text')}
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Comments
