import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage/Mainpage";
import Project from "./pages/ProjectPage/Projectpage";
import About from "./pages/AboutPage/Aboutpage";
import Contact from "./pages/ContactPage/Contactpage";
import Cv from "./pages/CvPage/Cvpage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/project" exact element={<Project />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/cv" exact element={<Cv />} />
        </Routes>
    );
}

export default App;
