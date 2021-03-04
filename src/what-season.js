const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  
  if (date) {
    if( !Date.prototype.getTime()) { throw new Error};
    
    let numMonth = date.getMonth() 
        if (numMonth>=2 && numMonth<=4) {return 'spring';}
        else if (numMonth>=5 && numMonth<=7) {return 'summer';}
        else if (numMonth>=8 && numMonth<=10) {return 'autmn';}
        else if(numMonth==11 || numMonth<=1) {return 'winter';}
  }
    else {return 'Unable to determine the time of year!'};

};
