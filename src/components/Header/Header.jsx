import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = ({ currentSection, setCurrentSection }) => {
  const handleBrandClick = () => {
    setCurrentSection("about"); 
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#about" onClick={handleBrandClick}>
        Joshua Grant Slem
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="#about"
            onClick={() => setCurrentSection("about")}
            className={currentSection === "about" ? "active" : ""}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => setCurrentSection("portfolio")}
            className={currentSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => setCurrentSection("contact")}
            className={currentSection === "contact" ? "active" : ""}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() => setCurrentSection("resume")}
            className={currentSection === "resume" ? "active" : ""}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

