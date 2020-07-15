const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const performanceSchema = new Schema({
    name: {
        type: String, required: true, lowercase: true
    },
    description: {
        type: String, required: true, lowercase: true
    }
});

module.exports = mongoose.model('Performance', performanceSchema, 'performances');


const calendarSchema = new Schema({
    place: {
        type: String, required: true, lowercase: true
    },
    day: {
        type: Number, required: true, lowercase: true
    },
    month: {
        type: String, required: true
    },
    start: {
        type: String, require: true
    },
    end: {
        type: String, require: true
    },
    performances: [{
        type: Schema.Types.ObjectId,
        ref: 'Performance',
    }]
});

module.exports = mongoose.model('Calendar', calendarSchema, 'shows');