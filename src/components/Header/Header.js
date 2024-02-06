import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = ({ currentSection, setCurrentSection }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Joshua Grant Slem</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about" onClick={() => setCurrentSection('about')}>About Me</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => setCurrentSection('portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => setCurrentSection('contact')}>Contact</Nav.Link>
                    <Nav.Link href="#resume" onClick={() => setCurrentSection('resume')}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;