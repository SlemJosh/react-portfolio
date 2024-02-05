import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <Container>
            <Row className="my-5">
                {/* Loop through your projects and create a card for each */}
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="path_to_project_image.jpg" />
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                                A project to help you create a unique password.
                            </Card.Text>
                            https://slemjosh.github.io/password-generator/
                        </Card.Body>
                    </Card>
                </Col>
                {/* Repeat for other projects */}
            </Row>
        </Container>
    );
};

export default Portfolio;