const router = require('express').Router()
const userAccess = require('../models/user-access')

router.get('/', (req, res, next) => {
  if ( req.session.username ) res.render('index')
  else res.render('signin')
})

router.post('/signin', (req, res, next) => {
  const { username, password } = req.body

  userAccess.findOne({ username, password })
    .then(result => {
      if (result) {
        req.session.username = username
        res.redirect('/')
      } else {
        res.send('failed')
      }
    })
    .catch(err => console.log(err))
})

router.get('/logout', (req, res, next) => {
  if ( req.session.username ) {
    req.session.username = null
    res.redirect('/')
  } else {
    res.redirect('/')
  }
})

module.exports = router