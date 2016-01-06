const reader = require('..').reader

const conf = reader({
  // config
})

// conf is a function because we check data freshness at every call
console.log(conf())
