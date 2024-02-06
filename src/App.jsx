import React, { useState } from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [currentSection, setCurrentSection] = useState('about');

    return (
        <div className="App">
            <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <div className="main-content"> 
                {currentSection === 'about' && <AboutMe />}
                {currentSection === 'portfolio' && <Portfolio />}
                {currentSection === 'contact' && <Contact />}
                {currentSection === 'resume' && <Resume />}
            </div>
            <Footer />
        </div>
    );
};

export default App;

