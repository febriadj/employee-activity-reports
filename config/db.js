const mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
const dbUri = process.env.DB_URI

const dbConnect = mongoose.connect(dbUri, options)
  .then(() => console.log('mongodb connect'))
  .catch(err => console.log(err))

module.exports = dbConnect
