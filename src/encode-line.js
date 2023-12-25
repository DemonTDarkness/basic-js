const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let tmp = str.split('');
  let count = 0;
  let res = [];
  
  for(let i = 0; i < tmp.length; i++){
    count = 1;
      for(let j = i + 1; j < tmp.length; j++){
        if(tmp[i] === tmp[j]){
          count++;
        } else break;
      }
      res.push(`${count > 1 ? count : ''}` + `${tmp[i]}`);
    i += count - 1;
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
