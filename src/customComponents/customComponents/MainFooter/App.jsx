import React from 'react'
import { Link } from 'react-router-dom';
import PhoneIcon from "../../../assets/logos/phone_icon.svg";
import MessageIcon from '../../../assets/logos/message_icon.svg';
import LocationIcon from '../../../assets/logos/location_icon.svg'
import PhoneNumberIcon from "../../../assets/logos/phone.svg";
import TelegramIcon from '../../../assets/logos/tg.svg'
import InstagramIcon from '../../../assets/logos/insta.svg'
import FacebookIcon from '../../../assets/logos/facebook.svg'
import UsatLogo from '../../../assets/logos/usatLogo.webp'
import "./App.css";
import { useTranslation } from 'react-i18next';
const MainFooter = ({child}) => {
    const {t}=useTranslation();
  return (
      <div
          id="contact"
          style={child ? { padding: '20px 0px 0px 0px' } : { padding: '20px 20px' }}
          className="main_footer"
      >
          <div className="main_footer_container">
              <img className="main_footer_img" src={UsatLogo} alt="Usat logo" />
              <ul className="main_footer_data_list">
                  <li className="main_footer_data_list_item">
                      <h3 className="main_footer_data_list_item_title">
                          {t('footer_title1')}
                      </h3>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title1_info1')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title1_info2')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title1_info3')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title1_info4')}
                      </div>
                  </li>
                  <li className="main_footer_data_list_item">
                      <h3 className="main_footer_data_list_item_title">
                          {t('footer_title2')}
                      </h3>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title2_info1')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title2_info2')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title2_info3')}
                      </div>
                  </li>
                  <li className="main_footer_data_list_item">
                      <h3 className="main_footer_data_list_item_title">
                          {t('footer_title3')}
                      </h3>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title3_info1')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title3_info2')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title3_info3')}
                      </div>
                  </li>
                  <li className="main_footer_data_list_item">
                      <h3 className="main_footer_data_list_item_title">
                          {t('footer_title4')}
                      </h3>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title4_info1')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title4_info2')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title4_info3')}
                      </div>
                      <div className="main_footer_data_list_item_info">
                          {t('footer_title4_info4')}
                      </div>
                  </li>
              </ul>
              <ul className="main_footer_contact_list">
                  <li className="main_footer_contact_list_item">
                      <h3 className="main_footer_contact_list_item_title">
                          {t('footer_questions_title')}
                      </h3>
                      <div className="main_footer_contact_list_item_info">
                          {t('footer_questions_text')}
                      </div>
                  </li>
                  <li className="main_footer_contact_list_item main_footer_contact_list_item_new">
                      <img
                          className="main_footer_contact_list_item_img"
                          src={PhoneIcon}
                          alt="Phone icon"
                      />
                      <div>
                          <p className="main_footer_contact_list_item_text">
                              {t('footer_questions_phone')}
                          </p>
                          <p className="main_footer_contact_list_item_link">
                              <Link
                                  className="footer_links"
                                  to="tel:+998788883888"
                              >
                                  +78 888 38 88
                              </Link>
                          </p>
                      </div>
                  </li>
                  <li className="main_footer_contact_list_item main_footer_contact_list_item_new">
                      <img
                          className="main_footer_contact_list_item_img"
                          src={MessageIcon}
                          alt="Message icon"
                      />
                      <div>
                          <p className="main_footer_contact_list_item_text">
                              {t('footer_questions_admin')}
                          </p>
                          <p className="main_footer_contact_list_item_link">
                              <Link
                                  className="footer_links"
                                  to="https://t.me/usat_admins"
                              >
                                  @usat_admin
                              </Link>
                          </p>
                      </div>
                  </li>
                  <li className="main_footer_contact_list_item main_footer_contact_list_item_new">
                      <img
                          className="main_footer_contact_list_item_img"
                          src={LocationIcon}
                          alt="Location icon"
                      />
                      <div>
                          <p className="main_footer_contact_list_item_text">
                              {t('footer_questions_location')}
                          </p>
                          <p className="main_footer_contact_list_item_link">
                              <Link
                                  className="footer_links"
                                  to="https://yandex.uz/maps/10335/tashkent/?ll=69.163715%2C41.260736&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=21"
                              >
                                  {t('footer_questions_location_text')}
                              </Link>
                          </p>
                      </div>
                  </li>
              </ul>
              <ul className="main_footer_socials_list">
                  <li className="main_footer_socials_list_item">
                      <Link to="tel:+998712007677">
                          <img src={PhoneNumberIcon} alt="Phone number icon" />
                      </Link>
                      <Link to="https://t.me/usatuzb">
                          <img src={TelegramIcon} alt="Telegram icon" />
                      </Link>
                      <Link to="https://www.instagram.com/usatuz/">
                          <img src={InstagramIcon} alt="Instagram icon" />
                      </Link>
                      <Link to="https://www.facebook.com/usatuz/">
                          <img src={FacebookIcon} alt="Facebook icon" />
                      </Link>
                  </li>
                  <li className="main_footer_socials_list_item">
                      <p className="main_footer_socials_list_item_text">
                          {t('footer_secret_text1')}
                      </p>
                      <p className="main_footer_socials_list_item_text">
                          {t('footer_secret_text2')}
                      </p>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default MainFooter
