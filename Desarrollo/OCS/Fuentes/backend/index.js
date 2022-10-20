const express = require('express');
require('dotenv').config();

const { connectToDatabase } = require('./src/configs/database.config');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
