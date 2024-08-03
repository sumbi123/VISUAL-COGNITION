import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ExperimentResults() {
    const { id } = useParams();
    const [participants, setParticipants] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/participants/${id}`)
            .then(response => {
                setParticipants(response.data);
            })
            .catch(error => {
                console.error('Error fetching participants:', error);
            });
    }, [id]);

    const data = {
        labels: participants.map(p => p.name),
        datasets: [{
            label: 'Participant Responses',
            data: participants.map(p => p.responses.length),
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    };

    return (
        <div>
            <h1>Experiment Results</h1>
            <Bar data={data} />
        </div>
    );
}

export default ExperimentResults;
