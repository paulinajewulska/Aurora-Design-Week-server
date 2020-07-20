const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationScheme = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

const messageScheme = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    question: { type: String, required: true }
});

module.exports = mongoose.model('Application', applicationScheme, 'applications');
module.exports = mongoose.model('Message', messageScheme, 'messages');