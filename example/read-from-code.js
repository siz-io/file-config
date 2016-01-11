const reader = require('..').reader

const conf = reader({
  store: {
    type: 'local',
    path: __dirname + '/conf/myconf.yaml'
  },
  format: {
    type: 'yaml'
  }
})

// conf is a function because we check data freshness at every call
conf().then(c => console.log(c)).catch(err => console.log(err.stack || err))
