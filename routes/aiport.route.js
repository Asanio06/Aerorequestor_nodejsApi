const router = require('express').Router();

const airportController = require('../controller/aiport.controller');

router.get('/', airportController.getAllOpenAirport);
module.exports = router;
