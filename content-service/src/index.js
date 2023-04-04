const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mime = require('mime-types')

const mimes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.html/': 'text/html',
  '.js/': 'text/javascript',
  '.css/': 'text/css',
}

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.use(express.static('../admin-app/dist/happhubb-admin-frontend/'))

/* app.use('*', (req, res, next) => {
  const filename = path.join(__dirname, 'dist', req.url)
  const mimeType = mime.lookup(filename)

  res.setHeader('content-type', mimeType)
  next()
}) */

// express.static.mime.define({ 'ext/javascript': ['js', 'js/'], 'text/css': ['css', 'css/'] })

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../admin-app/dist/happhubb-admin-frontend/index.html'))
})

app.listen(port, () => {
  console.log('Server started on port 3000')
})
