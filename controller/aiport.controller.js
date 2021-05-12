const { Op } = require('sequelize');
const model = require('../model');

const airportModel = model.airport;

exports.getAllOpenAirport = async (req, res) => {
  try {
    const allAirport = await airportModel.findAll({
      where: {
        type: {
          [Op.not]: 'closed',
        },
      },
    });

    return res.status(200).send({
      allAirport,
    });
  } catch (erreur) {
    return res.status(400).send({
      message: erreur.message,
    });
  }
};
