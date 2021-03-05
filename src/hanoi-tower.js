const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
if (diskNumber!=0 || turnsSpeed!=0){

 let turns = (Math.pow(2,disksNumber))-1;
 let seconds = Math.floor((turns/turnsSpeed)*3600);

}

  return {turns, seconds}
};
