const express = require('express');
const premium = require('./premium');
const validation = require('./validation');


const handleRoot = (req, res, next) => {
  const response = '<h1>Please use /v1/quote/car-insurance ...</h1>\
  <p>car_value [REQUIRED], number Float, value of the car excl. VAT</p>\
  <p>driver_birthdate [REQUIRED], string, of the form "DD/MM/YYYY"</p>';
  res.status(200).send(response);
};


const handleOther = (req, res, next) => {
  res.status(404).send('<h1>Please use /v1/quote/car-insurance ...</h1>');
};


const handleQuery = (req, res, next) => {
  // console.log(req.url, req.params);
  // console.log('req.query = ', req.query);
  // console.log('req.param.car_value = ', req.param('car_value'));
  // console.log('req.param.driver_birthdate = ', req.param('driver_birthdate'));
  let response = {};

  const validation = validParams(req); // return object { valid: boolean, carValue, driverBirthday }

  // check if no params or bad params:
  if (!validation.valid) {
    response = {
      "success": false,
      "message": "parameters missing or incorrect values"
    };
    // res.statusCode = 400;
    return res.status(400).json(response); //should exit! do I need to use next() as well??
  }

  // assign params:
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
  res.json(response);
};


module.exports = { handleRoot, handleQuery, handleOther };
// module.exports = { handleRoot, handleQuery };

// module.exports = {
//   handleRoot: function(req, res) {
//     return handleRoot(req, res);
//   },
//   handleQuery: function(req, res) {
//     return handleQuery(req, res);
//   }
// };
