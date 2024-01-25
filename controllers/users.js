const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../config').config
const { ConflictError } = require('../errors/errors')
const User = require('../models/user')
const { HTTP_STATUS_CREATED } = require('http2').constants


module.exports.createUser = (req, res, next) => {
  User.findOne({email: req.body.email})
    .then((user) => {
      if (user) {
        throw new ConflictError('Пользователь с такой почтой уже существует, необходимо указать другую');
      }

      bcrypt.hash(req.body.password, 10)
        .then((hash) => User.create({
          email: req.body.email,
          password: hash,
          name: req.body.name
        }))
        .then((user) => {
          res.status(HTTP_STATUS_CREATED).send({
            _id: user._id,
            email: user.email,
            name: user.name
          });
        })
        .catch(next)
    })
    .catch(next)
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      res.send({
        token: jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: '7d' }),
      });
    })
    .catch(next)
};
