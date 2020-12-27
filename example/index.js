const go = require('..')

const config = {
  '/': 'OpenCache/0.1.1',
  '*': (req) => {
    if (req.headers.host === 'localhost:3000') {
      return 'Hello from localhost:3000'
    } else {
      return 'MISS from Origin-HND1'
    }
  }
}

// Export an http server handler for now v2
module.exports = go.createHandler(config)
