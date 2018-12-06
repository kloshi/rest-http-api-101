const express = require('express');
const path    = require("path");
const premium = require('./premium');
const validation = require('./validation');


// handle root url
const handleRoot = (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'views', 'index.html'));
};


// handle all other urls (404)
const handleOther = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
};


// handle query url
const handleQuery = (req, res, next) => {
  let response = {};

  // validate params; it returns an object { valid: boolean, carValue, driverBirthday }
  const validation = validParams(req);

  // send error response if no params or bad params:
  if (!validation.valid) {
    response = {
      "success": false,
      "message": "parameters missing or incorrect values"
    };
    return res.status(400).json(response);
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
