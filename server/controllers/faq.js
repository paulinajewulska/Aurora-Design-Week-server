const Question = require('../models/question');

exports.getQuestionsAndAnswers = (req, res, next) => {
    Question.find().then(questions => {
        res.json(questions);
    }).catch(err => {
        console.log(err);
    });
}