const { celebrate, Joi } = require('celebrate');

const urlValidator = Joi.string().required().pattern(/^(http|https?:\/\/)?(www\.)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+([/?].*)?$/)

module.exports.movieDeleteValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
  })
})

module.exports.movieCreateValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().positive().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: urlValidator,
    trailer: urlValidator,
    thumbnail: urlValidator,
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    movieId: Joi.number().required()
  })
})