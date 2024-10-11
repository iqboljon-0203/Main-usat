import  "./Magistr.css"
import SwiperMagistr from '../../../components/SwiperMagistr/App';
import { useTranslation } from "react-i18next";
const Magistr: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="magistr" className="magistr">
            <ul className="magistr_list">
                <li
                    className="magistr_item magistr_item_first"
                      
                >
                    <div className="inner_item">
                        <h2 className='magistr_item_title'>
                            {t('magistrtitle')}{' '}
                            <span className='bachelor_item_span'>
                                {t('suzmagistr')}
                            </span>{' '}
                            {t('davomimagistr')}
                        </h2>
                        <p className='magistr_item_text'>
                            {t('magistrinfo')}
                        </p>
                    </div>
                </li>
                <li className='magistr_item'>
                    <SwiperMagistr></SwiperMagistr>
                </li>
            </ul>
        </section>
    );
};

export default Magistr;
