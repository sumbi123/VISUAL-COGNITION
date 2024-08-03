import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, Spinner, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Experiments() {
    const [experiments, setExperiments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchExperiments();
    }, []);

    const fetchExperiments = () => {
        setLoading(true);
        axios.get('http://localhost:5000/api/experiments')
            .then(response => {
                setExperiments(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the experiments!', error);
                setLoading(false);
            });
    };

    const deleteExperiment = (id) => {
        axios.delete(`http://localhost:5000/api/experiments/${id}`)
            .then(response => {
                setMessage('Experiment deleted successfully');
                fetchExperiments(); // Refresh the list after deletion
            })
            .catch(error => {
                setMessage('Error deleting experiment');
                console.error('There was an error deleting the experiment!', error);
            });
    };

    return (
        <Container className="mt-4">
            <h1>Experiments</h1>
            {message && <Alert variant="info" className="mt-3">{message}</Alert>}
            {loading ? (
                <div className="d-flex justify-content-center mt-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    {experiments.length === 0 ? (
                        <Alert variant="info" className="mt-3">
                            There are currently no experiments available. Please check back later or add a new experiment.
                        </Alert>
                    ) : (
                        <ListGroup className="mt-3">
                            {experiments.map(exp => (
                                <ListGroup.Item key={exp._id} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5>{exp.title}</h5>
                                        <p>{exp.description}</p>
                                        <Button variant="link" as={Link} to={`/experiments/${exp._id}`}>Run Experiment</Button>
                                        <Button variant="link" as={Link} to={`/results/${exp._id}`}>View Results</Button>
                                    </div>
                                    <Button variant="danger" onClick={() => deleteExperiment(exp._id)}>Delete</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </>
            )}
        </Container>
    );
}

export default Experiments;
