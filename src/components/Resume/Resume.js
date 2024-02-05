import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container>
            <h2 className="my-5">My Resume</h2>
            <ListGroup>
                {/* List your skills, experiences, etc. */}
                <ListGroup.Item>HTML, CSS, JavaScript</ListGroup.Item>
                {/* Repeat for other skills and experiences */}
            </ListGroup>
            <Button href="path_to_resume.pdf" target="_blank" className="mt-3">
                Download Resume
            </Button>
        </Container>
    );
};

export default Resume;
