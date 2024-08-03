const express = require('express');
const router = express.Router();
const Participant = require('../models/Participant');

// Create a new participant
router.post('/', async (req, res) => {
    const { experiment, name, responses } = req.body;
    try {
        const newParticipant = new Participant({ experiment, name, responses });
        await newParticipant.save();
        res.json(newParticipant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all participants for an experiment
router.get('/:experimentId', async (req, res) => {
    try {
        const participants = await Participant.find({ experiment: req.params.experimentId });
        res.json(participants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single participant by ID
router.get('/participant/:id', async (req, res) => {
    try {
        const participant = await Participant.findById(req.params.id);
        if (!participant) throw Error('Participant not found');
        res.json(participant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a participant by ID
router.put('/participant/:id', async (req, res) => {
    const { experiment, name, responses } = req.body;
    try {
        const participant = await Participant.findByIdAndUpdate(
            req.params.id,
            { experiment, name, responses },
            { new: true }
        );
        if (!participant) throw Error('Participant not found');
        res.json(participant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a participant by ID
router.delete('/participant/:id', async (req, res) => {
    try {
        const participant = await Participant.findByIdAndDelete(req.params.id);
        if (!participant) throw Error('Participant not found');
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
