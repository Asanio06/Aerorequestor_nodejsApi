const axios = require('axios');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

const getXmlWeatherFile = async () => {
  const url = 'https://www.aviationweather.gov/adds/dataserver_current/current/metars.cache.xml';
  const xmlFile = await axios.get(url);
  return xmlFile;
};
exports.findBestEntrepriseForUser = async (req, res) => {
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
    return res.status(500).send({
      message: erreur.message,
    });
  }
};
