const express = require('express');

const router = express.Router();

const faqController = require('../controllers/faq');

router.use('/faq', faqController.getQuestionsAndAnswers);
router.use('*', (req, res, next) => { res.redirect('/'); });

module.exports = router;
