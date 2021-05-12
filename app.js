const express = require('express');
require('dotenv').config('./.env');
const model = require('./model');

const weatherRouter = require('./routes/weather.route');
const chartInfoRouter = require('./routes/chartInfo.route');

const app = express();

const port = 8000;
model.sequelize.sync();
app.use('/api/weather', weatherRouter);
app.use('/api/chart', chartInfoRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
