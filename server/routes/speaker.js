const express = require('express');

const router = express.Router();

const speakerController = require('../controllers/speaker');

router.use('/speakers/:speaker', speakerController.getSpeaker);
router.use('/speakers', speakerController.getAllSpeakers);

module.exports = router;