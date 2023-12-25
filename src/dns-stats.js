const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dom = {};
  for (let i = 0; i < domains.length; i++) {
    let tmp = domains[i].split('.').reverse();
    let str = '';
    for (let j = 0; j < tmp.length; j++) {
      str += `.${tmp[j]}`;
      if (dom[str]) {
        dom[str] += 1;
      } else dom[str] = 1;
    }  
  }
  return dom;
}

module.exports = {
  getDNSStats
};
