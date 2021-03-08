const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   encrypt(enc) {
    if (enc==null) throw new Error ('Error');
  }    
  decrypt(dec) {
    if (dec==null) throw new Error ('Error');
  }
}

module.exports = VigenereCipheringMachine;
