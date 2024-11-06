import React from 'react';
const Navbar = React.lazy(() => import('../../../components/Navbar/App.jsx'));
import  "./Hero.css"
import { useTranslation } from 'react-i18next';
const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <div className='hero_container'>
                <Navbar></Navbar>
                <div className="flex flex-col items-start justify-start pt-56">
                    <h1 className="title">{t('hero_title')}</h1>
                    <p className="hero_info">{t('hero_text')}</p>        
                </div>
            </div>
        </div>
    )
};

export default Hero;
