const router = require('express').Router
const fs = require('fs')
const _ = require('lodash')
const bodyParser = require('body-parser')

const editorPage = _.template(fs.readFileSync(__dirname + '/../res/editor.html'))

module.exports = options => {
  /* beautify ignore:start */
  options.store = (options.store.type && new (require('./stores/' + options.store.type))(options.store))
  options.format = (options.format.type && new (require('./formats/' + options.format.type))(options.format))
  /* beautify ignore:end */

  if (!(options.store.load && options.store.save)) throw new Error('[File Config] Invalid store')
  if (!options.format.parse) throw new Error('[File Config] Invalid format')
  const r = router()
  r.get('/edit', (req, res, next) => options.store.load().then(string => {
    res.type('html')
    res.send(editorPage({
      conf: string
    }))
  }).catch(next))

  r.use(bodyParser.text())
  r.post('/update', (req, res, next) => options.format.parse(req.body)
    .catch(err => {
      res.send({
        error: err.toString()
      })
      throw err
    })
    .then(conf => options.store.save(req.body))
    .then(() => res.send())
    .catch(err => req.headersSent ? null : next(err)))
  return r
}
