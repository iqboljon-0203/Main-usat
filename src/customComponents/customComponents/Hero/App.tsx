import React from 'react';
const Navbar = React.lazy(() => import('../../../components/Navbar/App.jsx'));
const Footer = React.lazy(() => import('../Footer/App'));
import  "./Hero.css"
import ApplicationButton from "../../../components/ApplicationButton/App.jsx";
import { useTranslation } from 'react-i18next';
import UsatButton from "../../../components/CabinetButton/App.jsx";
const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <div className='hero_container'>
                <Navbar></Navbar>
                <div className="flex flex-col items-start justify-start">
                    <h1 className="title">{t('hero_title')}</h1>
                    <p className="hero_info">{t('hero_text')}</p>
                    <div className="buttons">
                        <ApplicationButton></ApplicationButton>
                        <UsatButton></UsatButton>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
};

export default Hero;
