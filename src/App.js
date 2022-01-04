import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:id" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;
