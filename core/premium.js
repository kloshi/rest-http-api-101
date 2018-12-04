// calculate premium and return an object with key/value pair

// Price computation module
// The product is a simple insurance product with 2 components:

// Civil liability:

// Protects the driver in case there is a crash in which (s)he's responsible, paying out the damage to the victims

// Not eligible for drivers under 18 years old (excluded)

// Costs the following:

// €1000/year for drivers up to 25 years old (included)

// €500/year for drivers 26 years old or more

// Omnium:

// Protects the car in case of material damage

// Not eligible for drivers under 18 years old (excluded)

// Costs 3% of the value of the car

// car_value REQUIRED
// number Float, value of the car excl. VAT
// driver_birthdate REQUIRED
// string Of the form "DD/MM/YYYY"


// set insurance details:
const borderAge = 25;
const civilBelowBorderAge = 1000;
const civilAboveBorderAge = 500;
const omniumPercent = 0.03;


function getAge(driverBirthdate) {
    const today = new Date();
    const birthDate = new Date(Date.parse(driverBirthdate));
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    };
    return age;
};

getPremium = function(carValueStr, driverBirthdate) {
  const carValue = parseFloat(carValueStr.replace(",", "."));
  const driverAge = getAge(driverBirthdate);
  const omnium = Math.round((carValue * omniumPercent) * 1e2 ) / 1e2;
  let civil = 0;
  if (driverAge > borderAge) {
    civil = civilAboveBorderAge;
  } else {
    civil = civilBelowBorderAge;
  };
  // console.log('calculated age = ', driverAge);
  // console.log('calculated civil = ', civil, typeof civil);
  // console.log('calculated omnium = ', omnium, typeof omnium);
  // console.log('calculated premium total = ', (civil + omnium), typeof (civil + omnium));
  return {
    "civil": civil,
    "omnium": omnium
  };
};

module.exports = {
  getPremium,
  getAge
};
