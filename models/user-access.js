const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userAccess = new Schema({
  username: String,
  password: String
})

module.exports = mongoose.model('user-access', userAccess)