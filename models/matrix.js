const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matrixSchema = new Schema({
  waktu: {
    type: Date,
    default: Date.now
  },
  pelatih: String,
  personil: Number,
  materi: String
})

module.exports = matrixs = mongoose.model('matrix', matrixSchema)