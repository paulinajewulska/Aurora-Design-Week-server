const express = require('express');
const router = express.Router();

const calendarController = require('../controllers/calendar');

const { validateEventsInMonth, validatePerformances } = require('../validators/calendarValidator');
const { checkValidation } = require('../validators/checkValidation');

router.use('/calendar/:month/:day', validatePerformances, checkValidation,calendarController.getAllPerformances);
router.use('/calendar/:month', validateEventsInMonth, checkValidation, calendarController.getAllEventsInMonth);
router.use('/calendar', calendarController.getAllEvents);

module.exports = router;