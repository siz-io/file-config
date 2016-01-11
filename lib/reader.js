module.exports = options => {
  /* beautify ignore:start */
  options.store = (options.store.type && new (require('./stores/' + options.store.type))(options.store))
  options.format = (options.format.type && new (require('./formats/' + options.format.type))(options.format))
  /* beautify ignore:end */
  return () => options.store.load().then(string => options.format.parse(string))
}
