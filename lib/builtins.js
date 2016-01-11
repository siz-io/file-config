module.exports = (path, options) => {
  const Type = require(path + '/' + options.type)
  return new Type(options)
}
