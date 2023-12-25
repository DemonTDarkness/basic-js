const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const f = s1.split('');
  const s = s2.split('');

  let count = 0;

  for (let i = 0; i < f.length; i += 1) {
    for (let j = 0; j < s.length; j += 1) {
      if (f[i] === s[j]) {
        f[i] = '0';
        s[j] = '1';
        count += 1;
      }
    }    
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
