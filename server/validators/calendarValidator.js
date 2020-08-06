const { check } = require('express-validator');

exports.validateEventsInMonth = [
    check('month').trim().notEmpty().withMessage('Month is required.'),
    check('month').trim().isIn(['june', 'july', 'september']).withMessage(`Month is not matching any months.`),
];

exports.validatePerformances = [
    check('month').trim().notEmpty().withMessage('Month is required.'),
    check('month').trim().isIn(['june', 'july', 'september']).withMessage(`Month is not matching any months.`),
    check('day').trim().notEmpty().withMessage('Day is required.'),
    check('day').trim().isInt({ min: 1, max: 31 }).withMessage('Invalid day value.'),
];