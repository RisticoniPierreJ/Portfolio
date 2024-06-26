import "../assets/css/main.css";
import Navbar from "../containers/Navbar/Navbar";

function Home() {
    return (
        <>
            <header>
                {/* <section>
                    <Navbar />
                </section> */}
                <Navbar />
            </header>
            <main>
                <section id="Acceuil" className="hero">
                    Hero
                </section>
                <section id="Projets" className="project">
                    Projets
                </section>
                <section id="Pour quoi ?" className="whatFor">
                    Pour quoi ?
                </section>
                <section id="Compétences" className="techno">
                    Technos
                </section>
                <section id="Contact" className="contact">
                    Contact
                </section>
            </main>
        </>
    );
}

export default Home;
