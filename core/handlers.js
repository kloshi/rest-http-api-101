const express = require('express');
const path    = require("path");
const premium = require('./premium');
const validation = require('./validation');


const handleRoot = (req, res, next) => {
  // const response = '<h1>Please use /v1/quote/car-insurance ...</h1>\
  // <p>car_value [REQUIRED], number Float, value of the car excl. VAT</p>\
  // <p>driver_birthdate [REQUIRED], string, of the form "DD/MM/YYYY"</p>';
  // res.status(200).send(response);
  res.status(200).sendFile(path.join(__dirname, '../', 'views', 'index.html'));
};


const handleOther = (req, res, next) => {
  // res.status(404).send('<h1>Please use /v1/quote/car-insurance ...</h1>');
  res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
};


const handleQuery = (req, res, next) => {
  let response = {};

  // return object { valid: boolean, carValue, driverBirthday }
  const validation = validParams(req);

  // check if no params or bad params:
  if (!validation.valid) {
    response = {
      "success": false,
      "message": "parameters missing or incorrect values"
    };
    return res.status(400).json(response); //should exit! do I need to use next() as well??
  }

  // assign values and call for premium calculation:
  const carValue = validation.carValue;
  const driverBirthdate = validation.driverBirthdate;
  const data = getPremium(carValue, driverBirthdate);

  // build response
  response = {
    "success": true,
    "message": "quote successfully computed",
    "data": data
  };

  // send response
  res.status(200).json(response);
};


module.exports = { handleRoot, handleQuery, handleOther };

// module.exports = {
//   handleRoot: function(req, res) {
//     return handleRoot(req, res);
//   },
//   handleQuery: function(req, res) {
//     return handleQuery(req, res);
//   }
// };
