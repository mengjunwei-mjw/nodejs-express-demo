const express = require('express')
const port = process.env.PORT || 80
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const server = app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: gracefully shutting down')
  if (server) {
    server.close(() => {
      console.log('HTTP server closed')
    })
  }
})
