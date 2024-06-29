function HeroContent() {
    return (
        <div className="heroContent">
            <div className="heroContent__title">
                <h1>Bienvenue ! </h1>
                <h2>
                    Je suis <span>Pierre-Jean Risticoni</span>
                </h2>
                <p className="heroContent__title-job">Développeur Web</p>
            </div>
            <p className="heroContent__description">
                Click (Generate) to create a new font pairing, (Lock) to lock
                fonts that you want to keep, and (Edit) to choose a font
                manually. The text is editable, try replacing it with your
                company name or other copy.
                <br />
                <br /> The goal of font pairing is to select fonts that share an
                overarching theme yet have a pleasing contrast. Which fonts work
                together is largely a matter of intuition, but we approach this
                problem with a neural net. See Github for more technical
                details.
            </p>
        </div>
    );
}

export default HeroContent;
