const router = require('express').Router();
const auth = require('../middlewares/auth')
const { NotFoundError } = require('../errors/errors')

router.use('/', require('./login'))
router.use('/users', auth, require('./users'))
router.use('/movies', auth, require('./movies'))

router.use('*', function(req, res, next) {
  next(new NotFoundError('URL not found'))
});


module.exports = router;