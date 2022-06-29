const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const multer  = require('multer')
const nodepath = require('node:path')
const { port } = require('../options')

const app = express()
const upload = multer({ dest: 'public/uploads/' })

app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(nodepath.join(__dirname, '../public')))

app.get('/ping', (_req, res) => {
  res.send("pong")
})

app.get('/', (req, res) => {
  res.render("index")
})

app.post('/upload', upload.single('pic'), (req, res, next) => {
  const { file } = req
  const { originalname, path } = file
  const pathParts = path.split(nodepath.sep)
  pathParts.pop()
  pathParts.push(originalname)
  fs.rename(path, pathParts.join(nodepath.sep), () => {
    res.render('index')
  })
})

const server = app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

module.exports = server
