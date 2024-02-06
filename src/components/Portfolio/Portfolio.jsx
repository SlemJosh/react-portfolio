import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Portfolio.css'; 


import passwordImage from '../../assets/password.png';
import weatherDashImage from '../../assets/weatherdash.png';
import techBlogImage from '../../assets/techblog.png';
import culinaryCrossroadsImage from '../../assets/culinarycrossroads.png';
import christmasKarmaImage from '../../assets/christmaskarma.png';
import oldPortfolioImage from '../../assets/old-portfolio.png';

const Portfolio = () => {
    return (
        <Container>
            <Row className="my-5">
                
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={passwordImage} />
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                                A project to help you create a unique password.
                            </Card.Text>
                            <Card.Link href="https://github.com/SlemJosh/password-generator" target="_blank">GitHub</Card.Link>
                            <Card.Link href="https://slemjosh.github.io/password-generator/" target="_blank">View Project</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src={weatherDashImage} />
                        <Card.Body>
                            <Card.Title>Weather Dashboard</Card.Title>
                            <Card.Text>
                                To help you track the Forecast
                            </Card.Text>
                            <Card.Link href="https://github.com/SlemJosh/weather-dashboard" target="_blank">GitHub</Card.Link>
                            <Card.Link href="https://slemjosh.github.io/weather-dashboard/" target="_blank">View Project</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src={techBlogImage} />
                        <Card.Body>
                            <Card.Title>Tech Blog</Card.Title>
                            <Card.Text>
                                A Place to Blog About Tech
                            </Card.Text>
                            <Card.Link href="https://github.com/SlemJosh/tech-blog?tab=readme-ov-file" target="_blank">GitHub</Card.Link>
                            <Card.Link href="https://slem-tech-blog-91d81cf34c26.herokuapp.com/" target="_blank">View Project</Card.Link>
                        </Card.Body>
                        
                    </Card>
                </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src={culinaryCrossroadsImage} />
                        <Card.Body>
                            <Card.Title>Culinary Crossroads</Card.Title>
                            <Card.Text>
                                Helping you get fed.
                            </Card.Text>
                            <Card.Link href="https://github.com/SlemJosh/culinary-crossroads" target="_blank">GitHub</Card.Link>
                            <Card.Link href="https://slemjosh.github.io/culinary-crossroads/index.html" target="_blank">View Project</Card.Link>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col md={4}>
                <Card>
                <Card.Img variant="top" src={christmasKarmaImage} />
                        <Card.Body>
                            <Card.Title>Christmas Karma</Card.Title>
                            <Card.Text>
                                Which list are you on?.
                            </Card.Text>
                            <Card.Link href="https://github.com/Malili05/Christmas-Karma" target="_blank">GitHub</Card.Link>
                            <Card.Link href="https://christmas-karma-260d886a8d3e.herokuapp.com/" target="_blank">View Project</Card.Link>
                        </Card.Body>
                      
                    </Card>
                </Col>
                <Col md={4}>
                <Card>
                <Card.Img variant="top" src={oldPortfolioImage} />
                        <Card.Body>
                            <Card.Title>My First Portfolio</Card.Title>
                            <Card.Text>
                                See how far we've come
                            </Card.Text>
                            <Card.Link href="https://github.com/SlemJosh/portfolio" target="_blank">GitHub</Card.Link>
                            <Card.Link href="https://github.com/SlemJosh/portfolio?tab=readme-ov-file" target="_blank">View Project</Card.Link>
                        </Card.Body>
                       
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Portfolio;

