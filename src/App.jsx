import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import "../src/utils/fontAwesomeConfig.js";
import Navbar from "./containers/Navbar/Navbar.jsx";
import ViewProject from "./views/ViewProject/ViewProject.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Footer from "./containers/Footer/Footer.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";

function App() {
    return (
        <Router basename="/Portfolio">
            <ScrollToTop />

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<ViewProject />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
