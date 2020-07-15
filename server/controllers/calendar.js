const Calendar = require('../models/calendar');

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

exports.getAllEvents = (req, res, next) => {
    Calendar.find().select('-performances')
        .then(performances => res.json(performances))
        .catch(err => next(err));
}

exports.getAllEventsInMonth = (req, res, next) => {
    const month = req.params.month.toLowerCase();
    const monthCapitalized = capitalize(month);

    Calendar.find({ month: monthCapitalized }).select('-performances')
        .then(performances => res.json(performances))
        .catch(err => next(err));
}

exports.getAllPerformances = (req, res, next) => {
    const month = req.params.month.toLowerCase();
    const monthCapitalized = capitalize(month);
    const day = req.params.day;

    Calendar.find({ month: monthCapitalized, day: day }).populate('performances')
        .then(performances => res.json(performances))
        .catch(err => next(err));
}
