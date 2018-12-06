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
```
// GET with query params
$ curl -d 'car_value=5000.33&driver_birthdate="11/05/1990"' http://localhost:8080/v1/quote/car-insurance
```
```
// POST with body params json
$ curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/v1/quote/car-insurance -d '{"car_value": 5000.50,"driver_birthdate": "11/05/1999"}'
```
## Insurance premium calculation
The product is a simple insurance product with 2 components:
* Civil liability:
  - Protects the driver in case there is a crash in which (s)he's responsible, paying out the damage to the victims
  - Not eligible for drivers under 18 years old (excluded)
  - Costs the following:
    * €1000/year for drivers up to 25 years old (included)
    * €500/year for drivers 26 years old or more
* Omnium:
  - Protects the car in case of material damage
  - Not eligible for drivers under 18 years old (excluded)
  - Costs 3% of the value of the car

The above rules for premium calculation can be changed in the following file:
```
// in core/premium.js:
const borderAge = 25;
const civilBelowBorderAge = 1000;
const civilAboveBorderAge = 500;
const omniumPercent = 0.03;
```
## Running the tests
Tests are prepared with the use of [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/)
```
$ npm run test
```
tests/test-queries.js contains queries and corresponding correct responses for the tests
## Dev mode
```
$ npm run dev
```
