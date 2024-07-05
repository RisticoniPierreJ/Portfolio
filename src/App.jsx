import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import "../src/utils/fontAwesomeConfig.js";
import Navbar from "./containers/Navbar/Navbar.jsx";
// import "./assets/css/main.css";
// import "./App.css";

function App() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
