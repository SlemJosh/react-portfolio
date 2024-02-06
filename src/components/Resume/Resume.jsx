import React from "react";
import { Container } from "react-bootstrap";
import resumePDF from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h2 className="my-5">My Resume</h2>
      <a
        href={resumePDF}
        download="resume.pdf"
        className="btn btn-primary mb-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <iframe
        src={resumePDF}
        type="application/pdf"
        title="Resume"
        style={{
          width: "100%",
          height: "calc(100vh - 50px)", // Adjust the height as needed
        }}
      />
    </Container>
  );
};

export default Resume;
