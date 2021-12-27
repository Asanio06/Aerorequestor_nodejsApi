const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(...dbConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.airport = require('./Airport.model')(sequelize, Sequelize);
db.countrie = require('./Countrie.model')(sequelize, Sequelize);
db.chartOfAirport = require('./ChartOfAirport.model')(sequelize, Sequelize);
db.metar = require('./Metar.model')(sequelize, Sequelize);

db.airport.hasOne(db.metar, {
  foreignKey: 'station_id',
  type: DataTypes.STRING(4),
  as: 'Metar',

});
db.metar.belongsTo(db.airport, {
  foreignKey: 'station_id',

});

db.airport.hasMany(db.chartOfAirport, {
  foreignKey: 'ICAO_AIRPORT',
  type: DataTypes.STRING(4),
  as: 'Charts',

});

db.chartOfAirport.belongsTo(db.airport, {
  foreignKey: 'ICAO_AIRPORT',

});

db.countrie.hasMany(db.airport, {
  foreignKey: 'iso_country',
  type: DataTypes.STRING(2),

});
db.airport.belongsTo(db.countrie, {
  foreignKey: 'iso_country',

});

module.exports = db;
