import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Form, Button, Spinner, Alert, Image } from 'react-bootstrap';

function RunExperiment() {
    const { id } = useParams();
    const [experiment, setExperiment] = useState(null);
    const [responses, setResponses] = useState([]);
    const [participantName, setParticipantName] = useState('');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/experiments/${id}`)
            .then(response => {
                setExperiment(response.data);
                setResponses(new Array(response.data.images.length).fill(''));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching experiment:', error);
                setLoading(false);
            });
    }, [id]);

    const handleResponseChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/participants', {
            experiment: id,
            name: participantName,
            responses: responses
        })
        .then(response => {
            setMessage('Responses submitted successfully');
        })
        .catch(error => {
            setMessage('Error submitting responses');
        });
    };

    if (loading) {
        return (
            <Container className="mt-4">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (!experiment) {
        return <div>No experiment found</div>;
    }

    return (
        <Container className="mt-4">
            <h1>{experiment.title}</h1>
            <p>{experiment.description}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Participant Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={participantName}
                        onChange={(e) => setParticipantName(e.target.value)}
                        required
                    />
                </Form.Group>
                {experiment.images && experiment.images.map((image, index) => (
                    <div key={index} className="mt-3">
                        <Image src={image.url} fluid alt={`Image ${index + 1}`} />
                        <Form.Group controlId={`formResponse${index}`} className="mt-2">
                            <Form.Label>Response for Image {index + 1}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your response"
                                value={responses[index] || ''}
                                onChange={(e) => handleResponseChange(index, e.target.value)}
                                required
                            />
                        </Form.Group>
                    </div>
                ))}
                <Button variant="primary" type="submit" className="mt-3">
                    Submit Responses
                </Button>
            </Form>
            {message && <Alert variant="info" className="mt-3">{message}</Alert>}
        </Container>
    );
}

export default RunExperiment;
