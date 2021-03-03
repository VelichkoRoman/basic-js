const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count=0;
  let cat=matrix.flat();

  cat.forEach ((el) => {
    if (el=="^^"){
      count++;
      return
    }
  })
return count;
};
