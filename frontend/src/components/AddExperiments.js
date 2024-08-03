import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function AddExperiment() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('success');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/experiments', { title, description })
            .then(response => {
                console.log('Experiment added:', response.data);
                setMessage('Experiment added successfully!');
                setVariant('success');
                setTitle('');
                setDescription('');
            })
            .catch(error => {
                console.error('There was an error adding the experiment!', error);
                setMessage('Failed to add experiment. Please try again.');
                setVariant('danger');
            });
    };

    return (
        <Container className="mt-4">
            <h1 className="text-center">Add New Experiment</h1>
            <Form onSubmit={handleSubmit} className="mt-4 p-4 border rounded shadow-sm">
                {message && <Alert variant={variant} className="text-center">{message}</Alert>}
                
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter experiment title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter experiment description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Add Experiment
                </Button>
            </Form>
        </Container>
    );
}

export default AddExperiment;
