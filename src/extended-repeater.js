const CustomError = require("../extensions/custom-error")

module.exports = function repeater(str, options) {
  let result
  let additionVar

  if (options.separator == undefined) options.separator = '+'
  if (options.additionSeparator == undefined) options.additionSeparator = '|'

  //if (options.additionSeparator == undefined) options.separator = '|'
  //if (options.additionSeparator == undefined) options.separator = '|'

  if (options.repeatTimes != undefined) {

    if (options.addition == undefined || options.additonRepeatTimes == undefined) {
      result = (String(str) + options.separator).repeat(options.repeatTimes).split('')
    console.log(result.join(''), 'findme')
      result.splice(result.length - options.separator.length, options.separator.length)
    //console.log(result.join(''), 'findme')

    } else {
      additionVar = (String(options.addition) + options.additionSeparator).repeat(options.additonRepeatTimes).split('')
      additionVar.splice(additionVar.length - options.additionSeparator.length-1, options.additionSeparator.length)
      result = (String(str) + additionVar.join('') + options.separator).repeat(options.repeatTimes).split()
      console.log(result, 'findme')
      result.splice(result.length - options.separator.length, options.separator.length)
  
    }



  }
    return result.join('')
  //additionRepeatTimes
}