import React from "react";
import { Container } from "react-bootstrap";
import resumePDF from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2 className="my-5">My Resume</h2>
        <iframe
          src={resumePDF}
          type="application/pdf"
          title="Resume"
          width="900px"
          height="1200px"
        />
      </div>
    </Container>
  );
};

export default Resume;
