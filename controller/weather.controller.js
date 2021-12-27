const { Op } = require('sequelize');
const model = require('../model');
const db = require('../model');

const airportModel = model.airport;

exports.getWeatherDataOfAirport = async (req, res) => {
  const { ICAO } = req.params;

  try {
    const airport = await airportModel.findOne({
      where: {
        ident: ICAO,

      },
      include: ['Metar', 'Charts'],
    });

    return res.status(200).send({
      airport,
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};

exports.getWindiestAirportInWorld = async (req, res) => {
  try {
    const airport = await airportModel.findOne({
      where: {
        type: {
          [Op.not]: 'closed',
        },
      },
      order: [
        ['Metar', 'wind_speed_kt', 'DESC'],
      ],
      include: [{
        model: db.metar,
        as: 'Metar',
        required: true,
      },
      {
        model: db.countrie,
        required: true,
      },
      ],
    });

    return res.status(200).send({
      airport,
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};
