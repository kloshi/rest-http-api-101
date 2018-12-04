const express = require('express');
const premium = require('./premium');


const handleRoot = (req, res) => {
  res.send('Please use /v1/quote/car-insurance ...')
};

const handleQuery = (req, res) => {
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
};

module.exports = {
  handleRoot: function(req, res) {
    return handleRoot(req, res);
  },
  handleQuery: function(req, res) {
    return handleQuery(req, res);
  }
};

// module.exports = handleRoot;
// module.exports = handleQuery;
