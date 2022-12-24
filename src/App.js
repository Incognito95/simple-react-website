import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

function App() {
    const [showError] = useState(false);

    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className="App">
        {/* {showError ? (
        // Render the error page
            <Menu />
        ) : (
            <ErrorPage />
        )} */}
        <Menu />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="cases" element={<Cases/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="/*" element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
