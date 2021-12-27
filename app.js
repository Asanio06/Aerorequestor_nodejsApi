const express = require('express');
require('dotenv').config('./.env');
const memoryCache = require('./routes/memory-cache');
const model = require('./model');

const weatherRouter = require('./routes/weather.route');
const chartInfoRouter = require('./routes/chartInfo.route');
const airportRouter = require('./routes/aiport.route');

const app = express();

const port = 8000;
model.sequelize.sync();
// eslint-disable-next-line no-console
app.use('/api/weather', memoryCache.cache(120), weatherRouter);
app.use('/api/chart', memoryCache.cache(86400), chartInfoRouter);
app.use('/api/airport', airportRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
