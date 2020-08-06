const contact = require('../models/contact');

exports.postSendApplication = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const application = new contact.Application({ name, email, phoneNumber });
    await application.save()
        .then(result => {
            console.log("Application received");
            return res.sendStatus(200);
        }).catch(err => next(err));
}


exports.postSendMessage = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const messageText = req.body.message;
    const message = new contact.Message({ name, email, message: messageText })
    await message.save()
        .then(result => {
            console.log("Message received");
            return res.sendStatus(200);
        }).catch(err => next(err));
}