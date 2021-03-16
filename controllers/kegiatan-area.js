const router = require('express').Router()
const kegiatanArea = require('../models/kegiatan-area')

router.get('/', (req, res, next) => {
  const query = req.query.del

  if ( req.session.username ) {
    if ( !query && query == undefined ) {
      kegiatanArea.find()
        .then(result => res.render('kegiatan-area', { result: result }))
        .catch(err => console.log(err))
    } else {
      kegiatanArea.findOneAndDelete({ _id: query })
        .then(() => res.redirect('/kegiatan-area'))
        .catch(err => console.log(err))
    }
  } else {
    res.status(302).redirect('/')
  }
})

router.post('/', (req, res, next) => {
  const { tanggal, aktifitas, vendor, waktu, kegiatan, lokasi, petugas } = req.body

  if ( req.session.username ) {
    if ( aktifitas ) {
      const kegiatanConfig = new kegiatanArea({
        tanggal: tanggal,
        aktifitas: "Tidak Ada Aktifitas"
      })
  
      kegiatanConfig.save()
        .then(() => res.redirect('/kegiatan-area'))
        .catch(err => console.log(err))
  
    } else {
      if ( !tanggal || !vendor || !waktu || !kegiatan || !lokasi || !petugas ) {
        return res.send('Harap Isi Semua Formulirnya')
      }
  
      const kegiatanConfig = new kegiatanArea({
        tanggal: tanggal,
        vendor: vendor,
        waktu: waktu,
        kegiatan: kegiatan,
        lokasi: lokasi,
        petugas: petugas,
      })
  
      kegiatanConfig.save()
        .then(() => res.redirect('/kegiatan-area'))
        .catch(err => console.log(err))
    }
  } else {
    res.status(302).redirect('/')
  }
})

module.exports = router