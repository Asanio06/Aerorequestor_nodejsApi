const router = require('express').Router();

const airportController = require('../controller/aiport.controller');

router.get('/', airportController.getAllOpenAirport);
router.get('/:ICAO', airportController.getAirport);
module.exports = router;
