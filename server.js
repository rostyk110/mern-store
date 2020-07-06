const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})
