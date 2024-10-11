import Students from "../../../assets/logos/students.webp"
import "./MagistrInfo.css"
import { useTranslation } from "react-i18next";
const MagistrInfo: React.FC = () => {
    const { t } = useTranslation();
    const language=localStorage.getItem("i18nextLng")||'uz';

    return (
        <div id="magistr" className="magistr_info">
            <ul className="magistr_info_list">
                <li className="magistr_info_item">
                    <img
                        className="magistr_info_item_img"
                        src={Students}
                        alt="Students"
                        loading="lazy"
                    ></img>
                </li>
                <li className="magistr_info_item magistr_info_item_new">
                    <div>
                        <h2 className="magistr_info_item_title">
                            {language === 'uz' ? (
                                <p>
                                    <span
                                        className="
                                            magistr_info_item_title_span
                                        "
                                    >
                                        {t('suzqulaylik')}
                                    </span>{' '}
                                    {t('qulayliktitle')}
                                </p>
                            ) : (
                                <p>
                                    {t('qulayliktitle')}{' '}
                                    <span
                                        className="
                                            magistr_info_item_title_span
                                        "
                                    >
                                        {t('suzqulaylik')}
                                    </span>
                                </p>
                            )}
                        </h2>
                        <p className="magistr_info_item_text">
                            {t('qulaylikinfo')}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MagistrInfo;
