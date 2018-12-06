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

// routes
app.get('/v1/quote/car-insurance', handlers.handleQuery); // accept query params in url
app.post('/v1/quote/car-insurance', handlers.handleQuery); // accept POST with body params
app.get('/', handlers.handleRoot);
app.use('/', handlers.handleOther);


// start server
const server = app.listen(port);
console.log(`Running the server on port ${port}...`);

module.exports = server;

// Tests - export for tests
// module.exports = {
//   getPremium,
//   validParams,
//   server
  // addNumbers: function(a,b){
  //   return a + b;
  // }
// }

