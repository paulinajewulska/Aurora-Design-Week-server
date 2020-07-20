const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contact');

router.post('/application', contactController.postSendApplication);
router.post('/message', contactController.postSendMessage);

module.exports = router;
