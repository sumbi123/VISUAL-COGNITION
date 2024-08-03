import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-4">
            <Row className="text-center mb-4">
                <Col>
                    <h1>About the Visual Cognition Testing Application</h1>
                    <p className="lead">
                        This application is designed to facilitate the exploration and understanding of visual cognition through interactive experiments.
                    </p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                Our mission is to provide a platform where researchers can design experiments, collect data, and analyze the results to gain insights into how the human brain processes visual information.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Innovative Experiment Designs</ListGroup.Item>
                                <ListGroup.Item>Secure and Efficient Data Collection</ListGroup.Item>
                                <ListGroup.Item>Comprehensive Analysis Tools</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>About the Experiments</Card.Title>
                            <Card.Text>
                                The experiments are designed to explore various aspects of visual cognition, including perception, memory, and decision-making. Participants are asked to perform tasks that require them to process and respond to visual stimuli.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Visual Perception Tasks</ListGroup.Item>
                                <ListGroup.Item>Memory Recall Challenges</ListGroup.Item>
                                <ListGroup.Item>Decision-Making Scenarios</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
