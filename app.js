const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// Routes
app.get('/', function (req, res) {
  res.send('Please use /v1/quote/car-insurance ...')
});

app.get('/v1/quote/car-insurance', function (req, res) {
  // check if there's input coming with the request, if not return an adequate error
  // check if the input if correct (separate function), if not return an adequate error
  // calculate premium and prepare result in JSON format
  // return result JSON
  res.send('Hello, nothing\'s ready yet')
});


// start server
app.listen(8080);
console.log("Running the server on port 8080...");

// tests (some sample functions for use )
module.exports = {
  sayHello: function(){
    return 'Hello!';
  },
  addNumbers: function(a,b){
    return a + b;
  }
};
