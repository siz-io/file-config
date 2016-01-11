const yaml = require('js-yaml')

const Format = function (options) {
  this.options = options || {}
}

Format.prototype.parse = function (string) {
  return new Promise(res => res(yaml.safeLoad(string)))
}

module.exports = Format
