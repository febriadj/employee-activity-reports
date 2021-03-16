const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kegiatanAreaSchema = new Schema({
  tanggal: {
    type: Date,
    default: Date.now()
  },
  vendor: String,
  waktu: String,
  kegiatan: String,
  lokasi: String,
  petugas: String,
  aktifitas: String
})

module.exports = mongoose.model('kegiatan-area', kegiatanAreaSchema)