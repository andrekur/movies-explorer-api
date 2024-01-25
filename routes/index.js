const router = require('express').Router();
const auth = require('../middlewares/auth')
const { NotFoundError } = require('../errors/errors')

router.use('/', require('./login'))


router.use('*', function(req, res, next) {
  next(new NotFoundError('URL not found'))
});


module.exports = router;