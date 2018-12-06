// this file contains queries and corresponding correct responses
// ===========

const testQueries = {};

// correct json content in case of missing or wrong params
testQueries.failureResponse  = {
  "success": false,
  "message": "parameters missing or incorrect values"
};

// query 01 if driver <26
testQueries.query01a = { car_value: 5999.50, driver_birthdate: "01/1/1999" };
testQueries.query01b = 'car_value=5999.50&driver_birthdate="01/01/1999"';
// correct json response content:
testQueries.response01 = {
  "success": true,
  "message": "quote successfully computed",
  "data": {
    "success": true,
    "eligible": true,
    "premiums": {
      "civil_liability": 1000,
      "omnium": 179.99
    }
  }
};

// query 02 if driver >=26
testQueries.query02a = { car_value: "5999.50", driver_birthdate: "1/06/1992" };
testQueries.query02b = 'car_value=5999.50&driver_birthdate="1/06/1992"';
// correct json response content:
testQueries.response02 = {
  "success": true,
  "message": "quote successfully computed",
  "data": {
    "success": true,
    "eligible": true,
    "premiums": {
      "civil_liability": 500,
      "omnium": 179.99
    }
  }
};

// query 03 if driver <18
testQueries.query03a = { car_value: "5999.50", driver_birthdate: "11/05/2010" };
testQueries.query03b = 'car_value=5999.50&driver_birthdate="11/05/2010"';
// correct json response content:
testQueries.response03 = {
  "success": true,
  "message": "quote successfully computed",
  "data": {
    "success": true,
    "eligible": false,
    "premiums": null
  }
};

// query 04 if car value =<0
testQueries.query04a = { car_value: "-1000.99", driver_birthdate: "11/05/1980" };
testQueries.query04b = 'car_value=-1000.99&driver_birthdate="11/05/1980"';
// correct json response content:
testQueries.response04 = testQueries.failureResponse;


module.exports = testQueries;
