const axios = require('axios');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();
const model = require('../model');

const airportModel = model.airport;

const getXmlWeatherFile = async () => {
  const url = 'https://www.aviationweather.gov/adds/dataserver_current/current/metars.cache.xml';
  const xmlFile = await axios.get(url);
  return xmlFile;
};
exports.getWeatherDataOfAirport = async (req, res) => {
  const { ICAO } = req.params;

  try {
    const xmlFile = await getXmlWeatherFile();
    return parser.parseString(xmlFile.data, (err, result) => {
      const allWeatherData = result.response.data[0].METAR;
      const weatherData = allWeatherData.filter((el) => el.station_id == ICAO)[0];
      return res.status(200).send({
        weatherData,
      });
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};

exports.getWindiestAirportInWorld = async (req, res) => {
  try {
    const xmlFile = await getXmlWeatherFile();
    return parser.parseString(xmlFile.data, (err, result) => {
      const windiestAirport = result.response.data[0].METAR
        .sort((a, b) => b.wind_speed_kt - a.wind_speed_kt)[0];
      return res.status(200).send({
        windiestAirport,
      });
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};
