const router = require('express').Router();
const { getSeltUser, updateSelfUser } = require('../controllers/users');
const { updateUserDataValidator } = require('../validators/users')


router.get('/me', getSeltUser);
router.patch('/me', updateUserDataValidator, updateSelfUser);

module.exports = router;