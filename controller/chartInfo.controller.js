const model = require('../model');

const { chartOfAirport } = model;
exports.getListOfChartOfAirport = async (req, res) => {
  const { ICAO } = req.params;
  try {
    const listCarteAerport = await chartOfAirport.findAll({ where: { ICAO_AIRPORT: ICAO } });
    if (!listCarteAerport) throw new Error('Aucune carte');

    return res.status(200).send({
      listCarteAerport,
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};
