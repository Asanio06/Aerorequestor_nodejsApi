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

  InformationOfAirac.getInfoOfChart = (chartName) => sequelize.query('SELECT Chart_of_airport.ICAO_AIRPORT,Chart_of_airport.Chart_type , Chart_of_airport.Chart_name , information_of_airac.* \n'
      + '    FROM `Chart_of_airport`, Airport , information_of_airac WHERE information_of_airac.Countrie_code = Airport.iso_country AND \n'
      + '    Airport.ident = Chart_of_airport.ICAO_AIRPORT AND Chart_of_airport.Chart_name = :Chart_name\n'
      + '    AND NOW() BETWEEN information_of_airac.Date_begin AND information_of_airac.Date_end', {
    replacements: { Chart_name: chartName },
    raw: true,
    type: sequelize.QueryTypes.SELECT,
  });
  return InformationOfAirac;
};
