module.exports = (sequelize, Sequelize) => sequelize.define('Metar', {

  raw_text: {
    type: Sequelize.TEXT,
  },
  temp_c: {
    type: Sequelize.STRING(10),
  },
  wind_dir_degrees: {
    type: Sequelize.STRING(5),
  },
  wind_speed_kt: {
    type: Sequelize.INTEGER,
  },
  altim_in_hg: {
    type: Sequelize.STRING(20),
  },
  sea_level_pressure_mb: {
    type: Sequelize.STRING(20),
  },
  flight_category: {
    type: Sequelize.STRING(6),
  },
  metar_type: {
    type: Sequelize.STRING(5),
  },
  elevation_m: {
    type: Sequelize.STRING(10),
  },

}, {
  tableName: 'Metar',
  timestamps: false,

});
