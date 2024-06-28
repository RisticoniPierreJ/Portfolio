import SubmitButton from "../../components/SubmitButton/SubmitButton";
import HeroContent from "../../components/HeroContent/HeroContent";
import HeroImage from "../../components/HeroImage/HeroImage";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__top">
                <HeroImage />
                <HeroContent />
            </div>
            <div className="hero__buttons">
                <SubmitButton>Me contacter</SubmitButton>
                <SubmitButton>Mes projets</SubmitButton>
            </div>
        </div>
    );
}

export default Hero;
