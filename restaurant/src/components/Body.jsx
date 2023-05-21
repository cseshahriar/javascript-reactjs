import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Routes, Route } from 'react-router-dom';

const Body = () => {
    document.title = "About";

    return (
        <div>
            <Routes>
                <Route path="/"  element={ <Home/> } />
                <Route path="/menu"  element={ <Menu/> } />
                <Route path="/contact"  element={ <Contact/> } />
                <Route path="/about"  element={ <About/> } />
            </Routes>
        </div>
    );
}

export default Body;