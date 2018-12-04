const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

const premium = require('./core/premium')
const routes = require('./core/routes')

app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/', routes.handleRoot);
app.get('/v1/quote/car-insurance', routes.handleQuery);


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
