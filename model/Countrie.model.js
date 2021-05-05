module.exports = (sequelize, Sequelize) => {
  const Airport = sequelize.define('Countrie', {
    code: {
      type: Sequelize.STRING(2),
    },
    name: {
      type: Sequelize.STRING(44),
    },
    continent: {
      type: Sequelize.STRING(2),
    },
    wikipedia_link: {
      type: Sequelize.STRING(77),
    },
    keywords: {
      type: Sequelize.STRING(51),
    },

  }, {
    tableName: 'Countrie',
  });

  return Airport;
};
