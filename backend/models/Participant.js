const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    experiment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experiment',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    responses: {
        type: Array,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Participant', ParticipantSchema);
