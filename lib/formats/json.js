const Format = function (options) {
  this.options = options || {}
}

Format.prototype.parse = function (string) {
  return new Promise(res => res(JSON.parse(string)))
}

module.exports = Format
