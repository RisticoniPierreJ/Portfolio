import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
// import "./assets/css/main.css";
// import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
