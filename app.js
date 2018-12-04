const express = require('express');
const bodyParser = require('body-parser');
// const url = require('url');
// const querystring = require('querystring');

const premium = require('./core/premium');
const handlers = require('./core/handlers'); // required here only for mocha tests

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routes
app.get('/v1/quote/car-insurance', handlers.handleQuery);
app.get('/', handlers.handleRoot);


// start server
app.listen(port);
console.log(`Running the server on port ${port}...`);

// Tests - export for tests
module.exports = {
  getPremium,
  validParams,
  addNumbers: function(a,b){
    return a + b;
  }
}
