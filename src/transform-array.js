const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error
  let newArr = [...arr]

  newArr.forEach(el => {

      // i should do a loop, because rn i don't see the order of operators and
      // always start with discard next, if it's available

      if (el == '--discard-next') {
      if (arr.indexOf(el) != -1) {
        if (arr.indexOf(el) != newArr.length-1) {
          newArr.splice(arr.indexOf(el), 2)
        }
        else newArr.splice(arr.indexOf(el), 1)
      }
      }

      if (el == '--discard-prev') {
      if (arr.indexOf(el) != -1) {
        if (arr.indexOf(el) != 0) {
          newArr.splice(arr.indexOf(el)-1, 2)
        }
        else newArr.splice(arr.indexOf(el), 1)
      }
    }

      if (el == '--double-next') {
      if (arr.indexOf(el) != -1) {
        if (arr.indexOf(el) != newArr.length-1) {
          newArr.splice(arr.indexOf(el), 1, newArr[arr.indexOf(el)+1])
        }
        else newArr.splice(arr.indexOf(el), 1)
      }
    }

      if (el == '--double-prev') {
      if (arr.indexOf(el) != -1) {
        if (arr.indexOf(el) != 0) {
          newArr.splice(arr.indexOf(el), 1, newArr[arr.indexOf(el)-1])
        }
        else newArr.splice(arr.indexOf(el), 1)
      }
    }
  })
    console.log(arr, newArr)

  return newArr
/*
  newArr.forEach(el => {
    if (el == '--discard-next') {
      if (newArr.indexOf(el) != newArr.length-1)
        newArr.splice(newArr.indexOf(el), 2)
      else newArr.splice(newArr.indexOf(el), 1)
    }
    if (el == '--discard-prev') {
      if (newArr.indexOf(el) != 0)
        newArr.splice(newArr.indexOf(el)-1, 2)
      else newArr.splice(newArr.indexOf(el), 1)
    }
    if (el == '--double-prev') {
      if (newArr.indexOf(el) != 0)
        newArr.splice(newArr.indexOf(el), 1, newArr[newArr.indexOf(el)-1])
      else newArr.splice(newArr.indexOf(el), 1)
    }
    if (el == '--double-next') {
      if (newArr.indexOf(el) != newArr.length-1)
        newArr.splice(newArr.indexOf(el), 1, newArr[newArr.indexOf(el)+1])
      else newArr.splice(newArr.indexOf(el), 1)
    }
  })

  */
  /*
  arr = arr.map(element => {
    if (discardNext) {
      discardNext = false
      return ''
    }
    if (element == '--discard-next') {
      discardNext = true
      return ''
    }
    return element
  })
  */
};
