import HeroContent from "../../components/HeroContent/HeroContent";
import HeroImage from "../../components/HeroImage/HeroImage";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__top">
                <HeroImage />
                <HeroContent />
            </div>
            <div className="hero__buttons">
                <ScrollLink
                    to="Contact"
                    smooth={true}
                    duration={500}
                    className="button"
                >
                    Me contacter
                </ScrollLink>
                <ScrollLink
                    to="Projets"
                    smooth={true}
                    duration={500}
                    className="button"
                >
                    Mes projets
                </ScrollLink>
            </div>
        </div>
    );
}

export default Hero;
