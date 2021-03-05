const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns;
  let seconds;
if (disksNumber=0 || turnsSpeed!=0){

 turns = Math.pow(2,disksNumber)-1;
 seconds = Math.floor((turns*3600)/turnsSpeed);

}
  return {turns, seconds};
};
