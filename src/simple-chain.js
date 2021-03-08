const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newArr:[],
  
  getLength() {
    return this.newArr.length;
  },

  addLink(value) {
    this.newArr.push(`( ${value} )`);
    return this;   
  },

  removeLink(position) {
    if (position < 1 ||!(Number.isInteger(position))||position>this.newArr.length) {
      this.newArr = []
      throw new Error('')
    }
    this.newArr.splice(position-1, 1)
    return this
   },

  reverseChain() {
    this.newArr.reverse();
    return this;
  },

  finishChain() {
    let end = this.newArr.join("~~");
    this.newArr = [];
    return end;
  }
};

module.exports = chainMaker;
