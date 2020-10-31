const CustomError = require("../extensions/custom-error")
const seasons = {
  '0': 'winter',
  '1': 'winter',
  '2': 'spring',
  '3': 'spring',
  '4': 'spring',
  '5': 'summer',
  '6': 'summer',
  '7': 'summer',
  '8': 'autumn',
  '9': 'autumn',
  '10': 'autumn',
  '11': 'winter'
}
const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  }
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

console.log(
  deeperFakeDate,
  Date,
  (Object.keys(Object.getPrototypeOf(new Date(55, 8))))
  //getSeason(deeperFakeDate)
  )

module.exports = getSeason
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  console.log(seasons[date.getMonth()])
  console.log(Object.keys(new Date(628021800000)))
  console.log(Object.keys(date))
    if (Object.keys(date).length != Object.keys(new Date(55)).length) throw new Error
  //if (typeof seasons[date.getMonth()] === 'string') {
    return seasons[date.getMonth()]
 // }
}

  //if (!(date instanceof Date)) throw new Error('Argument is not valid')
  // return 'Unable to determine the time of year!'
  //if (seasons[date.getMonth()] === null) 