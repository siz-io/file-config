const fs = require('fs-extra')

const Store = function (options) {
  this.options = options || {}
}

Store.prototype.load = function () {
  return new Promise((res, rej) => {
    fs.ensureFileSync(this.options.path)
    return fs.readFile(this.options.path, 'utf8', (err, content) => err ? rej(err) : res(content))
  })
}

Store.prototype.save = function (content) {
  return new Promise((res, rej) =>
    fs.outputFile(this.options.path, content, 'utf8', err => err ? rej(err) : res()))
}

module.exports = Store
