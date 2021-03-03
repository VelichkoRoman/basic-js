const CustomError = require("../extensions/custom-error");


// 'AABDEEGKPP' );
module.exports = function createDreamTeam(members) {
   
 let newArr=[];
if (!members) return false;
 for (let i = 0; i < members.length; i++) {
  if (typeof (members[i]) == 'string') {
      let preArr = members[i].slice(0,1).toUpperCase();
      newArr.push(preArr);
      
  }
  
 
} return newArr.sort();
   
};

