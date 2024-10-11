import  "./Questions.css";
import Accordion from "../../../components/Accordion/App";
import { useTranslation } from "react-i18next";
const Questions: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="answers" className="questions">
            <div className="questions_content">
                <h1 className="questions_title">
                    {t('questionstitle')}
                </h1>
                <p className="questions_text">
                    {t('questionsinfo')}{' '}
                    <a
                        href="https://t.me/usatuzb"
                        style={{ color: '#fff' }}
                    >
                        {t('suzquestions')}
                    </a>{' '}
                    {t('davomiquestions')}
                </p>
                <Accordion></Accordion>
            </div>
        </section>
    );
};

export default Questions;
