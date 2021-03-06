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
    message: { type: String, required: true }
});

module.exports = {
    Application: mongoose.model('Application', applicationScheme, 'applications'),
    Message: mongoose.model('Message', messageScheme, 'messages')
}