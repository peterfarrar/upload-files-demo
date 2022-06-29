const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const { port } = require('../options')

const app = express()
const upload = multer({ dest: 'public/uploads/' })

app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../public')))

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/upload', upload.single('pic'), (req, res) => {
  const { file } = req
  const { originalname: originalName, path: uploadedPath } = file
  const pathParts = uploadedPath.split(path.sep)
  pathParts.pop()
  pathParts.push(originalName)
  fs.rename(uploadedPath, pathParts.join(path.sep), () => {
    res.render('index')
  })
})

const server = app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

module.exports = server
