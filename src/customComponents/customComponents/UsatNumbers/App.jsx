import React from 'react'
import "./UsatNumbers.css"
import Teachers from "../../../assets/logos/teachers.png"
import Parts from '../../../assets/logos/parts.png'
import Football from '../../../assets/logos/football.png'
import UsatNumbersImage from "../../../assets/logos/usat_numbers.png"
import { useTranslation } from 'react-i18next'
const UsatNumbers = () => {
    const {t}=useTranslation();
  const data = [
      {
          id: 1,
          img: Teachers,
          text: 'salom dunyo',
          number: '18/6',
      },
      {
          id: 2,
          img: '',
          text: t('numbers_info1'),
          number: '72',
      },
      {
          id: 3,
          img: Parts,
          text: 'salom dunyo',
          number: '18/6',
      },
      {
          id: 4,
          img: '',
          text: t('numbers_info2'),
          number: '18/6',
      },
      {
          id: 5,
          img: '',
          text: t('numbers_info3'),
          number: '50000',
      },
      {
          id: 6,
          img: Football,
          text: 'salom dunyo',
          number: '18/6',
      },

      {
          id: 7,
          img: '',
          text: t('numbers_info4'),
          number: '98%',
      },
      {
          id: 8,
          img: UsatNumbersImage,
          text: 'salom dunyo',
          number: '18/6',
      },
  ]
  return (
      <div id='result' className="usat_numbers">
          <div className="usat_numbers_container">
              <h2 className="usat_numbers_title">{t('numbers_title')}</h2>
              <p className="usat_numbers_text">{t('numbers_text')}</p>
              <ul className="usat_numbers_list">
                  {data.map((item) => (
                      <li key={item.id} className="usat_numbers_item">
                          {item.img ? (
                              <img src={item.img} alt="img" />
                          ) : (
                              <>
                                  <p className="usat_numbers_item_text">
                                      {item.text}
                                  </p>
                                  <p className="usat_numbers_item_number">
                                      {item.number}
                                  </p>
                              </>
                          )}
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  )
}

export default UsatNumbers
