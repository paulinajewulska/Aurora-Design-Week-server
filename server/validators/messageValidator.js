const { check } = require('express-validator');

exports.validateMessage = [
    check('name').trim().notEmpty().withMessage('Name is required.'),
    check('message').trim().notEmpty().withMessage('Message is required.'),
    check('email').trim().notEmpty().withMessage('E-mail is required.'),
    check('email').trim().isEmail().withMessage('Invalid e-mail address.'),
];