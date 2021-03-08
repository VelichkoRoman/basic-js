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
    if (!isNaN(position)) {
      for (let i = 0; i < this.newArr.length; i++) {
        if (i == position - 1) {
          this.newArr.splice(i, 1);
        }
      }
    } else {
      this.newArr = [];
      throw new Error('Error');
    }
    return this;
  },

  reverseChain() {
    this.newArr.reverse();
    return this;
  },

  finishChain() {
    let end = this.newArr.join("~~");
    this.chain = [];
    return end;
  }
};

module.exports = chainMaker;
