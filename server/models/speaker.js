const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speakerSchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    surname: { type: String, required: true, lowercase: true },
    country: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false }
});

module.exports = mongoose.model('Speaker', speakerSchema, 'speakers');