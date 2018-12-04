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

getPremium = function(carValue, driverBirthdate) {
  // const carValue = parseFloat(carValue.replace(",", "."));
  const driverAge = getAge(driverBirthdate);
  const omnium = Math.round((carValue * omniumPercent) * 1e2 ) / 1e2;
  let eligible = false;
  let premiums = null;
  let civilLiability = 0;
  if (driverAge >= 18) {
    eligible = true;
  }
  if (driverAge > borderAge) {
    civilLiability = civilAboveBorderAge;
  } else {
    civilLiability = civilBelowBorderAge;
  };
  if (eligible) {
    premiums = {
      "civil_liability": civilLiability,
      "omnium": omnium
    };
  }
  let data = {
    "success": true,
    "eligible": eligible,
    "premiums": premiums
  };

  // console.log('calculated age = ', driverAge);
  // console.log('calculated civil = ', civilLiability, typeof civilLiability);
  // console.log('calculated omnium = ', omnium, typeof omnium);
  // console.log('eligible = ', eligible);
  // console.log('data = ', data);

  return data;
};


module.exports = {
  getPremium,
  getAge
};
