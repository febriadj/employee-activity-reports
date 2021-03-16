const 
  router = require('express').Router(),
  matrixs = require('../models/matrix'), 
  session = require('express-session')

router.get('/', (req, res, next) => {
  let query = req.query.del

  if ( req.session.username ) {
    if ( !query ) {
      matrixs.find()
        .then(result => res.render('matrix', { matrixs: result }))
        .catch(err => console.log(err))
    } else {
      matrixs.findOneAndDelete({ _id: query })
        .then(() => res.redirect('/matrix'))
        .catch(err => console.log(err))
    }
  } else {
    res.status(302).redirect('/')
  }
})

router.post('/', (req, res, next) => {
  if ( req.session.username ) {
    const { waktu, pelatih, personil, materi } = req.body
    
    const dataMatrix = new matrixs({
      waktu: waktu,
      pelatih: pelatih,
      personil: personil,
      materi: materi
    })
  
    dataMatrix.save()
      .then(() => res.redirect('/matrix'))
      .catch(err => console.log(err))
  } else {
    res.status(302).redirect('/')
  }
})

module.exports = router