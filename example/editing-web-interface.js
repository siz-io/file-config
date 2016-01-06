const editor = require('..').editor
const express = require('express')

const app = express()

app.use('/conf', editor({
  // config
}))

app.listen(8080)
