const express = require('express');
const premium = require('./core/premium')
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/', function (req, res) {
  res.send('Please use /v1/quote/car-insurance ...')
});

app.get('/v1/quote/car-insurance', function (req, res) {
  // check if there's input coming with the request, if not return an adequate error
  // check if the input if correct (separate function), if not return an adequate error
  // can add authentication to prevent too many requests from a single machine
  // calculate premium and prepare result in JSON format
  // return result JSON

  // if no params or bad params:
  // res.statusCode = 400;
  // res.setHeader('Location', '/');
  // return res.end()
  // else
  // res.statusCode = 200;
  // res.setHeader('Location', '/');
  // build response
  // send response
  // return res.end()

  console.log(req.url, req.params);
  // console.log(req.body.user);
  // console.log(req.body.user.name);
  // console.log(req.body.user.email);

  // res.setHeader('Content-Type','text/html');
  // res.write('<html>');
  // res.write('</html>');
  // res.end();
  res.send('Hello, nothing\'s ready yet')
});


// start server
app.listen(port);
console.log(`Running the server on port ${port}...`);

// tests (some sample functions for use )
module.exports = {
  sayHello: function(){
    return 'Hello!';
  },
  addNumbers: function(a,b){
    return a + b;
  },
  calculatePremium: function(carValue, driverBirthdate) {
    return getPremium(carValue, driverBirthdate);
  }
};
