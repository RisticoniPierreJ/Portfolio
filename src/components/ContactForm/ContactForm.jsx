import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubmitButton from "../SubmitButton/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm() {
    const form = useRef();
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_y242j7j", "template_s42qskr", form.current, {
                publicKey: "kAPcRjfujUwO4rQQk",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setError(false);
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setError(true);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contactForm">
            {/* <div className="contactForm__inputContainer">

            </div> */}
            <div className="contactForm__input">
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-user"
                />
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Nom(*)"
                />
            </div>
            <div className="contactForm__input">
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-envelope"
                />
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email(*)"
                />
            </div>
            <div className="contactForm__input">
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-phone-flip"
                />
                <label htmlFor="phone"></label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Téléphone"
                />
            </div>
            <div className="contactForm__input">
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-comment-dots"
                />
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    name="message"
                    rows={10}
                    cols={30}
                    maxLength={1500}
                    required
                    placeholder="Votre message(*)"
                />
            </div>
            <div className="contactForm__button">
                <SubmitButton>Envoyer</SubmitButton>
            </div>

            {error === false ? (
                <p>Message envoyé !</p>
            ) : (
                error === true && <p>Erreur lors de l&apos;envoi du message</p>
            )}
        </form>
    );
}

export default ContactForm;
