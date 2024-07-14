import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import "../src/utils/fontAwesomeConfig.js";
import Header from "./containers/Header/Header.jsx";
import ViewProject from "./views/ViewProject/ViewProject.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Footer from "./containers/Footer/Footer.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";
import ScrollToTopIcon from "./components/ScrollToTopIcon/ScrollToTopIcon.jsx";

function App() {
    return (
        <Router basename="/Portfolio">
            <ScrollToTop />

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<ViewProject />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
            <ScrollToTopIcon />
            <Footer />
        </Router>
    );
}

export default App;
