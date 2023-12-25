const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // let str1 = '';
  // let str2 = '';
  // for(let i = 0; i < options.additionRepeatTimes; i++){
  //   str1 += options.addition + `${i < options.additionRepeatTimes - 1 ? options.additionSeparator : ""}`;
  // }
  // for(let i = 0; i < options.repeatTimes; i++){
    
  // str2 += str + str1 + `${i < options.repeatTimes - 1 ? options.separator : ""}`;
  // }
  // return str2;
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater
};
