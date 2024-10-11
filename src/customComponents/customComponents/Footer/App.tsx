import React from 'react'
// import Tg from '../../../assets/logos/tg.svg'
// import Instagram from '../../../assets/logos/insta.svg'
// import Facebook from '../../../assets/logos/facebook.svg'
import './Footer.css'
import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom'
import FooterSlider from '../../../components/FooterSlider/App.jsx'
const Footer: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <footer className="footer">
                <div className="mx-auto px-4">
                    <ul className="list">
                        <li className="item">
                            <p>{t('info1')}</p>
                        </li>
                        <li className="item">
                            <p>{t('info2')}</p>
                        </li>
                        <li className="item">
                            <p>{t('info3')}</p>
                        </li>
                        <li className="item">
                            <p>{t('info4')}</p>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="wrapper">
                <FooterSlider></FooterSlider>
            </div>
        </>
    )
}

export default Footer
