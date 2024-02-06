import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-center my-4">
            <a href="https://github.com/slemjosh" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
            </a>
            <a href="https://linkedin.com/in/joshua-slem-b39ab6228/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
            </a>
            <a href="https://twitter.com/JGSlem" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" /> 
            </a>
        </footer>
    );
};

export default Footer;

