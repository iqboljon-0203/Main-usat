import "./About.css";
import Slider from "../../../components/Slider/Slider";
const Hero: React.FC = () => {
    return (
        <section id="qulayliklar" className="about">
            <ul className="about_list">
                <Slider></Slider>
            </ul>
        </section>
    );
};

export default Hero;
