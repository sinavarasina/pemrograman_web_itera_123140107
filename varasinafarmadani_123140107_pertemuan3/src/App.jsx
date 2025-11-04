import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

export default function App() {
    return (
        <BookProvider>
            <BrowserRouter>
                <nav>
                    <Link to="/">Beranda</Link> | <Link to="/stats">Statistik</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>
            </BrowserRouter>
        </BookProvider>
    );
}

