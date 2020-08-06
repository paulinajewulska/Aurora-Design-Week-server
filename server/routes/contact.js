const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');

const { validateApplication } = require('../validators/applicationValidator');
const { validateMessage } = require('../validators/messageValidator');
const { checkValidation } = require('../validators/checkValidation');

router.post('/application', validateApplication, checkValidation, contactController.postSendApplication);
router.post('/message', validateMessage, checkValidation, contactController.postSendMessage);

module.exports = router;
