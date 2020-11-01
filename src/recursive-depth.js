const CustomError = require("../extensions/custom-error")

class DepthCalculator {
  depth = 0
  returningDepth = 0
  localMaxDepth = 0
  localMaxDepthResult = 0

  calculateDepth(arr) {
    if (this.depth == 0 && this.returningDepth == 0 && this.localMaxDepth == 0)
      this.localMaxDepthResult = 0
    if (arr.length == arr.filter(el => !Array.isArray(el)).length) { // should check, that there are no arrays inside
      //console.log('inside flat array', this.depth)
      this.depth = this.depth+1
      console.log('inside flat array', this.depth)
      //try comparing with max
      this.returningDepth = this.depth
      this.depth = 0
      return this.returningDepth
    }
    // return that next one
    arr.forEach(element => {
      if (arr.indexOf(arr[element])) {
        this.localMaxDepth = 0
      }
      if (Array.isArray(element)){
        //console.log('inside foreach array', this.depth)
        this.depth = this.depth+1
        console.log('inside foreach array', this.depth)
        this.calculateDepth(element)
        if (this.localMaxDepth < this.returningDepth) {
          this.localMaxDepth = this.returningDepth
          this.returningDepth = 0

          this.localMaxDepthResult = this.localMaxDepth
          return
        }
          //this.returningDepth = 0
        //return
      }
    })

    return this.localMaxDepthResult
  }
}
module.exports = DepthCalculator