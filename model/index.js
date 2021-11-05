const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(...dbConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.airport = require('./Airport.model')(sequelize, Sequelize);
db.countrie = require('./Countrie.model')(sequelize, Sequelize);
db.informationOfAirac = require('./InformationOfAirac.model')(sequelize, Sequelize);
db.chartOfAirport = require('./ChartOfAirport.model')(sequelize, Sequelize);

module.exports = db;
