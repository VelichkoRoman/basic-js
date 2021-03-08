const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let newArr = arr.slice(0);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next' ) {
      if (i == newArr.length - 1 ) {newArr[i]='none'}
      else {
        newArr[i]='none';
        newArr[i+1]='none';
      }
    }

    else if (newArr[i] === '--discard-prev' ) {
      if (i == 0 ) { newArr[i]='none'}
      else {
        newArr[i] ='none';
        newArr[i-1] ='none';
      }
    }   

    else if (newArr[i] === '--double-next') {
      if (i == newArr.length -1 ) { newArr[i] = 'none'}
      else { newArr[i]=newArr[i+1]}
    }

    else if (newArr[i] === '--double-prev') {
      if (i == 0) { newArr[i]= 'none'}
      else{ newArr[i]=newArr[i-1]}
    }
  }
  
    return newArr.filter(value => value != 'none');  
  
};
