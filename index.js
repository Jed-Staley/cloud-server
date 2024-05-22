'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

const itemRoutes = require('./routes/items');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Could not connect to the database', err))
;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use('/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})