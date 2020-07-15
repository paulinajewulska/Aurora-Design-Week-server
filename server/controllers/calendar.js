const Calendar = require('../models/calendar');

exports.getAllEvents = (req, res, next) => {
    Calendar.find().select('-performances').then(events => {
        res.json(events);
    }).catch(err => {
        console.log(err);
    });
}

exports.getAllEventsInMonth = (req, res, next) => {
    const month = req.params.month.toLowerCase();
    const monthCapitalized = `${month.charAt(0).toUpperCase()}${month.slice(1)}`;

    Calendar.find({ month: monthCapitalized }).select('-performances').then(events => {
        res.json(events);
    }).catch(err => {
        console.log(err);
    });
}

exports.getAllPerformances = (req, res, next) => {
    const month = req.params.month.toLowerCase();
    const monthCapitalized = `${month.charAt(0).toUpperCase()}${month.slice(1)}`;
    const day = req.params.day;

    Calendar.find({ month: monthCapitalized, day: day }).populate('performances').then(events => {
        res.json(events);
    }).catch(err => {
        console.log(err);
    });
}