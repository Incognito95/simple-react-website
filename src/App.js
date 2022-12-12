import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Gallery';
import Contact from './pages/Contact';

function App() {

    return (
        <div className="App">
            <Menu />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="cases" element={<Cases/>} />
                    <Route path="contact" element={<Contact/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;