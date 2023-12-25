const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let n1 = [];
let dig = String(n).split('');
let tmp = 0;


for(let i = 0; i < dig.length; i++){
  tmp = dig[i];
  dig.splice(i, 1);
  n1.push(dig.join(''));
  dig.splice(i, 0, tmp);
}

return Math.max(...n1);

}

module.exports = {
  deleteDigit
};
