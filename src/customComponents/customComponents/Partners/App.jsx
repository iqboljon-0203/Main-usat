import React from 'react'
import "./App.css"
import SliderPartners from "../../../components/SliderPartners/App";
import { useTranslation } from 'react-i18next';
const Partners = () => {
    const {t}=useTranslation();
  return (
      <div className="partners">
          <div className="partners_container">
              <h2 className="partners_title">{t("partners_title")}</h2>
              <SliderPartners></SliderPartners>
          </div>
      </div>
  )
}

export default Partners
