require('dotenv').config();
const cors = require('cors');
const { json } = require('body-parser');
const express = require('express');
let port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3001;

const configureRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(json());

configureRoutes(app);

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port: ' + port);
});
