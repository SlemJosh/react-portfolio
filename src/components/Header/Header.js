import React from 'react';

const Header = ({ currentSection, setCurrentSection }) => {
    return (
        <header>
            <h1>Your Name</h1>
            <nav>
                <ul>
                    <li onClick={() => setCurrentSection('about')}>About Me</li>
                    <li onClick={() => setCurrentSection('portfolio')}>Portfolio</li>
                    <li onClick={() => setCurrentSection('contact')}>Contact</li>
                    <li onClick={() => setCurrentSection('resume')}>Resume</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
