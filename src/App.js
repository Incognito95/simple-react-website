import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import CaseDetail from './pages/CaseDetail';
import ErrorPage from './pages/ErrorPage';

function App() {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    // TODO: hide navigation on error page

    return (
        <div className="App">
        <Menu />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="cases" element={<Cases/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="/case-detail/:id" element={<CaseDetail/>} />
                    <Route path="/*" element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
