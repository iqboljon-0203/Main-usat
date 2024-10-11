import "./Bachelor.css"
import Swiper from '../../../components/Swiper/App';
import { useTranslation } from "react-i18next";
const Bachelor: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="bachelor" className="bachelor">
            <ul className="bachelor_list">
                <li
                    className="bachelor_item bachelor_item_first"
                >
                    <div>
                        <h2 className='bachelor_item_title'>

                            {t("bakalavrtitle")}{" "}<span className='bachelor_item_span'>{t("suzbakalavr")}</span>{" "}{t("davomibakalavr")}
                        </h2>
                        <p className="bachelor_item_text">
                           {t("bakalavrinfo")}
                        </p>
                    </div>
                </li>
                <li className="bachelor_item">
                    <Swiper></Swiper>
                </li>
            </ul>
        </section>
    );
};

export default Bachelor;
