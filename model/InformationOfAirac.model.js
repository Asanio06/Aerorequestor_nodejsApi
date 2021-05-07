module.exports = (sequelize, Sequelize) => {
  const InformationOfAirac = sequelize.define('information_of_airac', {
    Countrie_code: {
      type: Sequelize.STRING(2),
    },
    AIRAC: {
      type: Sequelize.STRING(20),
    },
    Dete_begin: {
      type: Sequelize.DATE,
    },
    Date_end: {
      type: Sequelize.DATE,
    },
    Info1: {
      type: Sequelize.STRING(255),
    },
    Info2: {
      type: Sequelize.STRING(255),
    },
    Info3: {
      type: Sequelize.STRING(255),
    },
    Info4: {
      type: Sequelize.STRING(255),
    },

  }, {
    tableName: 'information_of_airac',
  });

  return InformationOfAirac;
};
