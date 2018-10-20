const debug = require('debug')('nullax:catalog')

const Koa = require('koa')

const logger = require('koa-logger')

const getenv = require('getenv')

// Init server app

const app = new Koa()

app.use(logger())

// Start app

const PORT = getenv.int('NODE_PORT', 8080)

const debugRun = () =>
  debug('Server running at http://localhost:%d', PORT)

app.listen(PORT, debugRun)
