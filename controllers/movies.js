const { ForbiddenError } = require('../errors/errors');
const { HTTP_STATUS_NO_CONTENT, HTTP_STATUS_CREATED } = require('http2').constants
const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then(movies => res.send(movies))
    .catch(next)
}

module.exports.createMovie = (req, res, next) => {
  const { country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId } = req.body
  Movie.create({
    country: country,
    director: director,
    duration: duration,
    year: year,
    description: description,
    image: image,
    trailerLink: trailer,
    nameRu: nameRU,
    nameEn: nameEN,
    thumbnail: thumbnail,
    movieId: movieId,
    owner: req.user._id
  })
    .then(card => res.status(HTTP_STATUS_CREATED).send(card))
    .catch(next)
}

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById({_id: req.params.movieId}).orFail()
    .then((movie) => {
      if (movie.owner._id != req.user._id) {
        throw new ForbiddenError('Отказано в доступе')
      }

      movie.deleteOne()
        .then(() => res.status(HTTP_STATUS_NO_CONTENT).send({}))
        .catch(next)
    })
    .catch(next)
}