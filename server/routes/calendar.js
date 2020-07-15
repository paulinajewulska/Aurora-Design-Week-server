const express = require('express');

const router = express.Router();

const calendarController = require('../controllers/calendar');

router.use('/calendar/:month/:day', calendarController.getAllPerformances);
router.use('/calendar/:month', calendarController.getAllEventsInMonth);
router.use('/calendar', calendarController.getAllEvents);

module.exports = router;