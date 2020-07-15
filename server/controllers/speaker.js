const Speaker = require('../models/speaker');

exports.getAllSpeakers = (req, res, next) => {
    Speaker.find().select('-description').then(speakers => {
        res.json(speakers);
    }).catch(err => {
        console.log(err);
    });
}

exports.getSpeaker = (req, res, next) => {
    const [name, surname] = req.params.speaker.split('-');
    Speaker.findOne({ name: name, surname: surname }).then(speaker => {
        res.json(speaker);
    }).catch(err => {
        console.log(err);
    });
}