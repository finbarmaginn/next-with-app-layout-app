const express = require('express')
const next = require('next')
const compression = require('compression')
const port = parseInt(process.env.PORT, 10) || 3000
const production = process.env.NODE_ENV === 'production'
const app = next({ production })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(compression())
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})