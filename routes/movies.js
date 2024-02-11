const router = require('express').Router();

const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { movieCreateValidator, movieDeleteValidator } = require('../validators/movies');

router.get('/', getMovies);
router.post('/', movieCreateValidator, createMovie);
router.delete('/:movieId', movieDeleteValidator, deleteMovie);

module.exports = router;