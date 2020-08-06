const { check } = require('express-validator');

exports.validateApplication = [
    check('name').trim().notEmpty().withMessage('Name is required.'),
    check('email').trim().notEmpty().withMessage('E-mail is required.'),
    check('email').trim().isEmail().withMessage('Invalid e-mail address.'),
    check('phoneNumber').trim().notEmpty().withMessage('Phone number is required.'),
    check('phoneNumber').trim().isMobilePhone().withMessage('Invalid phone number.'),
];