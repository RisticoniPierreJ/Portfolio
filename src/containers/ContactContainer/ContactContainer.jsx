import ContactForm from "../../components/ContactForm/ContactForm";

function ContactContainer() {
    return (
        <div className="contactContainer">
            <p className="contactContainer__SubTitle">
                Vous avez un <span>projet</span> ? contactez moi !
            </p>
            <ContactForm />
        </div>
    );
}

export default ContactContainer;
