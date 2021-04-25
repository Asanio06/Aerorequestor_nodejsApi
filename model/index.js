const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(...dbConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*  INITIALISATION DES SCRIPS DES PROCEDURES STOCKE AFIN DE LES CREES SI ELLES EXISTENT PAS */

db.airport = require('./Airport.model')(sequelize, Sequelize);

module.exports = db;
