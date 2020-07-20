const Application = require('../models/contact');
const Message = require('../models/contact');

exports.postSendApplication = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const application = new Application({ name: name, email: email, phoneNumber: phoneNumber });
    application.save().then(result => {
        res.sendStatus(200);
        console.log("Application received")
    }).catch(err => next(err));
}


exports.postSendMessage = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const question = req.body.question;
    const message = new Message({ name: name, email: email, question: question })
    message.save().then(result => {
        res.sendStatus(200);
        console.log("Message received")
    }).catch(err => next(err));
}