const express = require('express');
const premium = require('./premium');


const validParams = (req) => {
  let valid = true;
  // car_value: present
  // car_value: number
  valid = req.query.car_value && (typeof req.query.car_value === 'number');
  // driver_birthday: present
  // driver_birthday: string
  valid = req.query.driver_birthdate && (typeof req.query.driver_birthdate === 'string');
  // driver_birthday: form "DD/MM/YYYY"
  // ??? regex!
  return valid;
};

const handleRoot = (req, res, next) => {
  res.send('Please use /v1/quote/car-insurance ...')
};

const handleQuery = (req, res) => {
  console.log(req.url, req.params);
  console.log('req.query = ', req.query);
  console.log('req.param.car_value = ', req.param('car_value'));
  console.log('req.param.driver_birthdate = ', req.param('driver_birthdate'));
  let response = {};

  // check if no params or bad params:
  if (!validParams(req)) {
    response = {
      "success": false,
      "message": "parameters missing or incorrect values"
    };
    res.statusCode = 400;
    return res.json(response); //should exit! do I need to use next() as well??
  }

  // assign params:
  const car_value = req.query.car_value; // should be a number but let's try to accept a string too "5000.33"
  const driver_birthdate = req.query.driver_birthdate; // should be a string
  const data = getPremium(car_value, driver_birthdate);

  // build response
  response = {
    "success": true,
    "message": "quote successfully computed",
    "data": data
  };

  // send response
  res.json(response)
};


module.exports = { handleRoot, handleQuery };
// module.exports = {
//   handleRoot: function(req, res) {
//     return handleRoot(req, res);
//   },
//   handleQuery: function(req, res) {
//     return handleQuery(req, res);
//   }
// };

