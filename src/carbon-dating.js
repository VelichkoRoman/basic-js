const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if ( !sampleActivity || typeof (sampleActivity)!=="string" || sampleActivity<=0 || sampleActivity>15 ||isNaN(Number(sampleActivity))){ return false};

  let k = 0.693/HALF_LIFE_PERIOD;
  
  let age = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/k);
  
  return age;
};