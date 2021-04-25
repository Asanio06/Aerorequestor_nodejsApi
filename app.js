const express = require('express');
const weatherRouter = require('./routes/weather.route');

const app = express();

const port = 8000;

app.use('/api/weather', weatherRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
