const editor = require('..').editor
const express = require('express')

const app = express()

app.use('/myconf', editor({
  store: {
    type: 'local',
    path: __dirname + '/conf/myconf.yaml'
  },
  format: {
    type: 'yaml'
  }
}))

app.listen(8080)

process.on('SIGINT', () => process.exit(0)) // exit on Ctrl-C even if run as PID 1 (docker)
