import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { createContext, useState } from "react";
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("dark"); // theme state

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light")); // toggling between light / dark theme
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
            <div className="navbar navbar-expand-lg bg-dark navbar-text">
                <label  className="text-white switch-label">{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className="nav-item switch" />
            </div>
            <Menu />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="gallery" element={<Gallery/>} />
                    <Route path="contact" element={<Contact/>} />
                </Routes>
            </BrowserRouter>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;