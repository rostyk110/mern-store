const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Routes
const items = require('./routes/api/items')

// bodyParser middleware
app.use(bodyParser.json())

// DB Config
const db = (require('./config/keys')).mongoURI

// Connecting to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB is connected!'))
  .catch(e => console.log(e))

// Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})
