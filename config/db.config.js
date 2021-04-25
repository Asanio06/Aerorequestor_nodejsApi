module.exports = [
  process.env.BDD_NAME,
  process.env.BDD_USER,
  process.env.BDD_PASSWORD,
  {
    host: 'mysql-asanio.alwaysdata.net',
    dialect: 'mysql',
    dialectOptions: {
      multipleStatements: true,
    },
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
];
