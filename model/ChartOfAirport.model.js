module.exports = (sequelize, Sequelize) => sequelize.define('Chart_of_airport', {
  ICAO_AIRPORT: {
    type: Sequelize.STRING(4),
  },
  Chart_type: {
    type: Sequelize.STRING(10),
  },
  Chart_name: {
    type: Sequelize.STRING(255),
  },
  Chart_url: {
    type: Sequelize.STRING(255),
  },

}, {
  tableName: 'Chart_of_airport',
  timestamps: false,
});
