import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import "../src/utils/fontAwesomeConfig.js";
import Navbar from "./containers/Navbar/Navbar.jsx";
import ViewProject from "./views/ViewProject/ViewProject.jsx";

function App() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<ViewProject />} />
            </Routes>
        </Router>
    );
}

export default App;
