const express = require('express');
const router = express.Router();
const fortuneController = require('../controllers/fortuneController')


router.post('/fortuneText', fortuneController.createFortune, fortuneController.deleteAllFortunes, fortuneController.addTestFortunes, fortuneController.fetchRandomFortune, (req, res) => res.status(200).json(res.locals.fortune))


module.exports = router;