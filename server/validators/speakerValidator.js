const { check } = require('express-validator');

exports.validateSpeaker = [
    check('speaker').trim().notEmpty().withMessage('Speaker is required.'),
];
