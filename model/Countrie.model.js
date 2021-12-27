module.exports = (sequelize, Sequelize) => sequelize.define('Countrie', {
  code: {
    type: Sequelize.STRING(2),
    unique: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(44),
  },
  continent: {
    type: Sequelize.STRING(2),
  },
  wikipedia_link: {
    type: Sequelize.STRING(255),
  },
  keywords: {
    type: Sequelize.TEXT,
  },

}, {
  tableName: 'Countrie',
  timestamps: false,

});
