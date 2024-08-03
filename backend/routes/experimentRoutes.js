const express = require('express');
const router = express.Router();
const Experiment = require('../models/Experiment');

// Create a new experiment
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const newExperiment = new Experiment({ title, description });
        await newExperiment.save();
        res.json(newExperiment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all experiments
router.get('/', async (req, res) => {
    try {
        const experiments = await Experiment.find();
        res.json(experiments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single experiment by ID
router.get('/:id', async (req, res) => {
    try {
        const experiment = await Experiment.findById(req.params.id);
        if (!experiment) throw Error('Experiment not found');
        res.json(experiment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update an experiment by ID
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    try {
        const experiment = await Experiment.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );
        if (!experiment) throw Error('Experiment not found');
        res.json(experiment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete an experiment by ID
router.delete('/:id', async (req, res) => {
    try {
        const experiment = await Experiment.findByIdAndDelete(req.params.id);
        if (!experiment) {
            return res.status(404).json({ message: 'Experiment not found' });
        }
        res.json({ message: 'Experiment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
