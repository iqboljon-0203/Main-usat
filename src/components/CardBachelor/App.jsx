import React from 'react';
import File from "../../assets/logos/filenew.svg";
import { useTranslation } from 'react-i18next';
import  "./CardBachelor.css";
import { Link } from 'react-router-dom';
const FinancialTechnologies =React.memo(({title,priceKun,priceKech,priceSirt}) => {
    const {t}=useTranslation();
    return (
        <div
            id="card"
            className="w-full flex flex-col justify-center bg-white rounded-3xl  px-8 pt-12 h-full"
        >
            <div className="text-start h-1/5 flex  items-center justify-start">
                <h1
                    id="card_title"
                    className="text-5xl font-bold leading-[2.90rem] text-left text-cyan-900/[1] mb-4 uppercase"
                >
                    {title}
                </h1>
            </div>
            <div className="space-y-2 mb-4 h-4/5 flex flex-col justify-center ">
                <div className="py-6 mb-2">
                    <h2
                        id="card_subtitle"
                        className="text-4xl font-bold leading-[1.70rem] text-left uppercase text-cyan-900/[0.35] mb-4"
                    >
                        {t('kunduzgi')}
                    </h2>
                    <div className="flex justify-between items-center">
                        <p
                            id="card_contract"
                            className="text-2xl font-normal leading-[1.27rem] text-left text-cyan-900/[1]"
                        >
                            {t('contract')}
                        </p>
                        <h3
                            id="card_money"
                            className="text-xl font-normal leading-5 text-left  text-cyan-900/[0.35]"
                        >
                            <span
                                id="card_price"
                                className="text-5xl font-bold leading-[3.00rem] text-right text-cyan-900/[1]"
                            >
                                {priceKun}
                            </span>{' '}
                            {t('money')}
                        </h3>
                    </div>
                </div>
                <div className="py-6 mb-2">
                    <h2
                        id="card_subtitle"
                        className="text-4xl font-bold leading-[1.70rem] text-left uppercase text-cyan-900/[0.35] mb-4"
                    >
                        {t('kechki')}
                    </h2>
                    <div className="flex justify-between items-center">
                        <p
                            id="card_contract"
                            className="text-2xl font-normal leading-[1.27rem] text-left text-cyan-900/[1]"
                        >
                            {t('contract')}
                        </p>
                        <h3
                            id="card_money"
                            className="text-xl font-normal leading-5 text-left  text-cyan-900/[0.35]"
                        >
                            <span
                                id="card_price"
                                className="text-5xl font-bold leading-[3.00rem] text-right text-cyan-900/[1]"
                            >
                                {priceKech}
                            </span>{' '}
                            {t('money')}
                        </h3>
                    </div>
                </div>
                {priceSirt ? (
                    <div className="py-6 mb-2">
                        <h2
                            id="card_subtitle"
                            className="text-4xl font-bold leading-[1.70rem] text-left uppercase text-cyan-900/[0.35] mb-4"
                        >
                            {t('sirtqi')}
                        </h2>
                        <div className="flex justify-between items-center">
                            <p
                                id="card_contract"
                                className="text-2xl font-normal leading-[1.27rem] text-left text-cyan-900/[1]"
                            >
                                {t('contract')}
                            </p>
                            <h3
                                id="card_money"
                                className="text-xl font-normal leading-5 text-left  text-cyan-900/[0.35]"
                            >
                                <span
                                    id="card_price"
                                    className="text-5xl font-bold leading-[3.00rem] text-right text-cyan-900/[1]"
                                >
                                    {priceSirt}
                                </span>{' '}
                                {t('money')}
                            </h3>
                        </div>
                    </div>
                ) : null}
            </div>
            {/* <div className="text-center pt-10 pb-6 h-1/5">
                <Link to="https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz">
                    <button
                        id="card_button"
                        className="group w-full flex  items-center bg-amber-400/[1] pt-2  pr-8  pb-2  ps-2  gap-[0.63rem] rounded-full opacity-[0.00rem] hover:bg-yellow-600  transition-colors duration-300"
                    >
                        <img
                        id="card_button_icon"
                        
                            src={File}
                            alt="File icon"
                        ></img>{' '}
                        <p
                            id="card_button_text"
                            className="text-2xl font-medium leading-[1.27rem] text-left mx-auto  text-cyan-900/[1] group-hover:text-white transition-colors duration-300"
                        >
                            {t('ariza_button')}
                        </p>
                    </button>
                </Link>
            </div> */}
        </div>
    );
});

export default FinancialTechnologies;
