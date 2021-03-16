const router = require('express').Router()
const session = require('express-session')

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
}))

// controllers
router.use('/matrix', require('../controllers/matrix'))
router.use('/kegiatan-area', require('../controllers/kegiatan-area'))

router.use(require('../authentication/index'))
router.use((req, res, next) => res.status(404).send('Opss, 404'))

module.exports = router