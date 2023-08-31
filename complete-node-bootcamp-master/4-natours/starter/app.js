const express = require('express');
const fs = require('fs');

const app = express();

const tours = JSON.parse(
  fs.readFileSync(`../starter/dev-data/data/tours-simple.json`),
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side!',
    app: 'natours',
  });
});

app.post('/', (req, res) => {
  res.status(200).end('you can post this endpoint');
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
