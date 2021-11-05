module.exports = (sequelize, Sequelize) => {
  const Airport = sequelize.define('Airport', {
    ident: {
      map: 'indent',
      type: Sequelize.STRING(7),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING(14),
    },
    name: {
      type: Sequelize.STRING(80),
    },
    latitude_deg: {
      type: Sequelize.DECIMAL(25, 22),
    },
    longitude_deg: {
      type: Sequelize.STRING(22, 18),
    },
    elevation_ft: {
      type: Sequelize.INTEGER,
    },
    continent: {
      type: Sequelize.STRING(2),
    },
    iso_country: {
      type: Sequelize.STRING(2),
    },
    iso_region: {
      type: Sequelize.STRING(7),
    },
    municipality: {
      type: Sequelize.STRING(48),
    },
    scheduled_service: {
      type: Sequelize.STRING(3),
    },
    gps_code: {
      type: Sequelize.STRING(4),
    },
    iata_code: {
      type: Sequelize.STRING(3),
    },
    local_code: {
      type: Sequelize.STRING(7),
    },
    home_link: {
      type: Sequelize.STRING(128),
    },

    wikipedia_link: {
      type: Sequelize.STRING(128),
    },
    keywords: {
      type: Sequelize.STRING(255),
    },

  }, {
    tableName: 'Airport',
    timestamps: false,

  });

  return Airport;
};
