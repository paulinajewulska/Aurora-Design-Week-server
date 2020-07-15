const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const speakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    surname: {
        type: String,
        required: true,
        lowercase: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: false
    },
    description: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Speaker', speakerSchema, 'speakers');