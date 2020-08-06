const express = require('express');
const router = express.Router();

const speakerController = require('../controllers/speaker');

const { validateSpeaker } = require('../validators/speakerValidator');
const { checkValidation } = require('../validators/checkValidation');


router.use('/speakers/:speaker', validateSpeaker, checkValidation, speakerController.getSpeaker);
router.use('/speakers', speakerController.getAllSpeakers);

module.exports = router;