import './Info.css';
import Usat from '../../../assets/logos/usatMain.webp';
import { useTranslation } from 'react-i18next';
const Info: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id='university'  className='info'>
            <ul className='info_list'>
                <li className="info_item">
                    <img
                        src={Usat}
                        alt="Usat"
                        style={{ maxWidth: '100%' }}
                        loading='lazy'
                    ></img>
                </li>
                <li className="info_item info_item_new">
                    <div>
                        <h2 className="info_item_title">
                            <span className="info_item_title_span">{t("suzuniver")}</span>
                            {" "}
                            {t('univertitle')}
                        </h2>
                        <p className="info_item_text">
                            {t('univerinfo')}
                        </p>
                        
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Info;
