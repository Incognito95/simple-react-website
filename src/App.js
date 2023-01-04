import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import BoxedWater from './pages/BoxedWater';
import BuildIndoo from './pages/BuildIndoo';
import CocoOil from './pages/CocoOil';
import Nike from './pages/Nike';
import KitchenSink from './pages/KitchenSink';
import Amazon from './pages/Amazon';
import ErrorPage from './pages/ErrorPage';

function App() {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    // TODO: if statement to hide navigation on error page

    return (
        <div className="App">
        <Menu />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="cases" element={<Cases/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="boxed-water" element={<BoxedWater/>} />
                    <Route path="build-indoo" element={<BuildIndoo/>} />
                    <Route path="coco-oil" element={<CocoOil/>} />
                    <Route path="nike" element={<Nike/>} />
                    <Route path="kitchen-sink" element={<KitchenSink/>} />
                    <Route path="amazon" element={<Amazon/>} />
                    <Route path="/*" element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
