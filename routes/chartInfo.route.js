const router = require('express').Router();

const chartInfoController = require('../controller/chartInfo.controller');

router.get('/airport/:ICAO', chartInfoController.getListOfChartOfAirport);
module.exports = router;
