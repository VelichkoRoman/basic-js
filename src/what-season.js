const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (date instanceof Date && isNaN(date)) { throw new Error('Error');}
    if (!date)  {return 'Unable to determine the time of year!';}

    let numMonth = date.getMonth();

    if (numMonth>=2 && numMonth<=4) return 'spring';
    else if (numMonth>=5 && numMonth<=7) return 'summer';
    else if (numMonth>=8 && numMonth<=10) return 'autumn';
    else if (numMonth==11 || numMonth<=1) return 'winter';
 
};