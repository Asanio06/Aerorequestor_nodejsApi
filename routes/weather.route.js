const weatherController = require('../controller/weather.controller');

// eslint-disable-next-line import/order
const router = require('express').Router();

// Obtenir le client à partir de son pseudo
router.get('/metar/:ICAO', weatherController.findBestEntrepriseForUser);

module.exports = router;
