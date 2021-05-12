module.exports = (sequelize, Sequelize) => {
  const Countrie = sequelize.define('Countrie', {
    code: {
      type: Sequelize.STRING(2),
      primaryKey: true,
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

  return Countrie;
};
