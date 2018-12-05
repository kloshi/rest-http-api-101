// const express = require('express');

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
isValidDate = function(dateString) {
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
      return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
      return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  };


validParams = function(req) {
  // Object.keys(req.query.car_value).length === 0
  let result = {
    valid: true,
    carValue: 0,
    driverBirthdate: ""
  };

  // tests only:
  const x = !(req.query.car_value == null || req.query.driver_birthdate == null);
  const y = req.query.car_value != null && req.query.driver_birthdate != null;

  // if query params exist
  if (!(req.query.car_value == null || req.query.driver_birthdate == null)) {
    // assign params to local vars
    result.carValue = req.query.car_value;
    result.driverBirthdate = req.query.driver_birthdate.replace(/['"]+/g, ''); // remove duplicated quotation marks
  }
  // if body params exist
  if (req.body.car_value != null && req.body.driver_birthdate != null) {
    // assign params to local vars
    result.carValue = req.body.car_value;
    result.driverBirthdate = req.body.driver_birthdate.replace(/['"]+/g, ''); // remove duplicated quotation marks;
  }

  if (typeof result.carValue !== 'number') {
    // since we're nice people we'll try parse the value, from a string such as "600,50" to a float 600.50
    // result.carValue = parseFloat(result.carValue.replace(",", "."));
    result.carValue = parseFloat(result.carValue);
  }

  if (isNaN(result.carValue)) {
    // return res.status(400).end('"car_value" must be a valid number');
    result.valid = false;
    return result;
  }

  // driver_birthday: form "DD/MM/YYYY"
  if (!isValidDate(result.driverBirthdate)) {
   result.valid = false;
   return result;
 }

 return result;
};

module.exports = {
  validParams
};
