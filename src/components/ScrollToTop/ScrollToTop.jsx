import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    // Récupère le chemin de l'URL actuelle
    const { pathname } = useLocation();

    useEffect(() => {
        // Fait défiler la fenêtre en haut de la page à chaque changement de route
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
