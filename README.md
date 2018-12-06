# REST API exercise
An example node.js HTTP REST API to compute premium price for an insurance policy offered to customers
## Installation
```
$ git clone git@github.com:kloshi/rest-http-api-101.git
$ cd rest-http-api-101
$ npm install
$ npm run start
```
## Usage
```
$ http://localhost:8080/v1/quote/car-insurance
```
### Parameters
```
car_value        [REQUIRED]; number; Float, value of the car excl. VAT
driver_birthdate [REQUIRED]; string; Of the form "DD/MM/YYYY"
```
Accepts query parameters (http GET) or body parameters (http POST) in json
### curl example
```/
/ GET with query params
$ curl -d 'car_value=5000.33&driver_birthdate="11/05/1990"' http://localhost:8080/v1/quote/car-insurance
```
```
// POST with body params json
$ curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/v1/quote/car-insurance -d '{"car_value": 5000.50,"driver_birthdate": "11/05/1999"}'
```
## Running the tests
Tests are prepared with the use of [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/)
```
$ npm run test
```
## Dev mode
```
$ npm run dev
```
