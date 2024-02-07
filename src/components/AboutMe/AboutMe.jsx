import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profileImage from '../../assets/profile.jpg'; 

const AboutMe = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6} className="text-center">
        <Image src={profileImage} roundedCircle className="mb-3 img-fluid" />
          <h2>Joshua Grant Slem</h2>
          <p className="lead">Imaginations Manifested</p>
          <h6>Junior Developer</h6>
        </Col>
        <Col md={6}>
          <p>
            Passionate about technology from a young age, I've always been
            driven to understand the workings behind the digital world. This
            curiosity led me to a coding bootcamp, marking the beginning of my
            journey from tech enthusiast to aspiring full-stack developer. With
            a focus on turning passion into profession, I am nearing the
            completion of my training, ready to bring innovative solutions and
            fresh ideas to the tech industry.
          </p>
          <p>
            During my bootcamp, I've developed a strong foundation in front-end
            technologies, mastering HTML, JavaScript, and CSS. On the backend, I
            am proficient with Express and Node.js, and have practical
            experience with both SQL and NoSQL databases. Projects I've
            spearheaded include a fun "Naughty or Nice" list app and a
            resourceful meal suggestion website using various APIs, where my
            role as project lead allowed me to motivate and guide my teams
            through challenging and rewarding development processes.
          </p>
          <p>
            <strong>Skills Snapshot:</strong>
            <br />
            Front-End: HTML, JavaScript, CSS <br />
            Back-End: Express, Node.js <br />
            Databases: SQL, NoSQL <br />
            Additional: Handlebars, React
          </p>
          <p>
            As I step into the professional world, my goal is to join a
            forward-thinking company where I can continue to grow and stay at
            the forefront of emerging technologies. I am enthusiastic about
            finding opportunities that will challenge me, allowing me to evolve
            into a well-rounded full-stack developer, and I am excited to
            contribute to projects that bring imagination to life.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
