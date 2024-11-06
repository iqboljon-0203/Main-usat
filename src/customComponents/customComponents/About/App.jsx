import "./About.css";
import Slider from "../../../components/Slider/Slider";
const Hero =() => {
     
    return (
        <section id="qulayliklar" className="about">
           <div className="about_container">
             <ul className="about_list">
                <Slider></Slider>
            </ul>
            <div id="custom-pagination" className="about_inners">
            </div>
           </div>
        </section>
    );
};

export default Hero;
