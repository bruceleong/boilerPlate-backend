const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs')
const Papa = require('papaparse')

const app = express();

app.use(express.static('dist'));

app.get('/api/stuff', (req, res, next) => {
  console.log('hitting the proper route')
  res.send({data: 'hellloooo'});
})

app.listen(8080, () => console.log('Listening on port 8080!'));
