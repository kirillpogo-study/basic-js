const CustomError = require("../extensions/custom-error")

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) value = ' '
    if (value === null) value = 'null'
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (this.chain[position-1] === undefined) {
      this.chain = []
      throw new Error
    }
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let temp = this.chain
    temp[0] = '( ' + temp[0]
    temp[this.getLength()-1] = temp[this.getLength()-1] + ' )'
    this.chain = []
    return temp.join(' )~~( ')
  }
}

module.exports = chainMaker