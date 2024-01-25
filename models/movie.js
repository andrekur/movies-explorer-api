const mongoose = require('mongoose');
const isUrl = require('validator/lib/isUrl');


const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    validator: {
      validator : Number.isInteger,
      message: 'integer only'
    }
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isUrl(v),
      message: 'url only',
    }
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isUrl(v),
      message: 'url only',
    }
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isUrl(v),
      message: 'url only',
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  movieId: {
    type: Number,
    required: true,
    validator: {
      validator : Number.isInteger,
      message: 'integer only'
    }
  },
  nameRu: {
    type: String,
    required: true
  },
  nameEn: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('movie', movieSchema)