import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import the images from the assets directory
import experimentImage from '../assets/1_WmSNhK1BGctLUuXFVnV8pw.jpg'; // General experiment image
import joinCommunityImage from '../assets/Feb-24-webinar-thumbnail-Building-community-in-a-divided-world.jpg';
import contributeResearchImage from '../assets/doodle-science-education-element-with-colored-hand-drawn-cartoon-style_288411-1116.jpg';

function Home() {
    return (
        <Container className="mt-4">
            <Row className="align-items-center text-center bg-primary text-white p-5 rounded mb-4">
                <Col>
                    <h1 className="display-4">Welcome to the Visual Cognition Testing Application</h1>
                    <p className="lead">
                        Explore cutting-edge experiments in visual cognition and contribute to groundbreaking research.
                    </p>
                    <div className="mt-3">
                        <Button variant="light" href="/experiments" className="mx-2">
                            View Experiments
                        </Button>
                        <Button variant="light" href="/about" className="mx-2">
                            About Us
                        </Button>
                        <Button variant="light" href="/add-experiment" className="mx-2">
                            Add Experiment
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={4}>
                    <Card className="mb-4 shadow-sm h-100">
                        <Card.Img
                            variant="top"
                            src={experimentImage}
                            alt="Experiment Illustration"
                            className="card-img-top-fixed"
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Engaging Experiments</Card.Title>
                            <Card.Text className="flex-grow-1">
                                Participate in a variety of experiments designed to test visual perception and cognition.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm h-100">
                        <Card.Img
                            variant="top"
                            src={contributeResearchImage}
                            alt="Contribute to Research"
                            className="card-img-top-fixed"
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Contribute to Research</Card.Title>
                            <Card.Text className="flex-grow-1">
                                Help advance scientific understanding by providing valuable data for analysis.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm h-100">
                        <Card.Img
                            variant="top"
                            src={joinCommunityImage}
                            alt="Join a Community"
                            className="card-img-top-fixed"
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Join a Community</Card.Title>
                            <Card.Text className="flex-grow-1">
                                Connect with researchers and participants who share an interest in visual cognition.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
