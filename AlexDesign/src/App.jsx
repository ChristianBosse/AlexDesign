import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage/Mainpage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
        </Routes>
    );
}

export default App;
