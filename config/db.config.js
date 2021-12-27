module.exports = [
  process.env.BDD_NAME,
  process.env.BDD_USER,
  process.env.BDD_PASSWORD,
  {
    host: process.env.BDD_HOST !== '' ? process.env.BDD_HOST : 'localhost',
    port: process.env.BDD_PORT !== '' ? process.env.BDD_PORT : 3306,
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
