const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const server = http.createServer(app)

app.use(cors())
app.use(express.json())

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoURL = process.env.MONGODB_URL

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(console.log('connected to blogs url'))

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)
  blog
    .save()
    .then((result) => {
      response.status(201).json(result)
    })
    .catch((error) => response.status(404).json(error))
})

server.listen(config.PORT, () => {
  logger.info(`server running on ${config.PORT}`)
})
