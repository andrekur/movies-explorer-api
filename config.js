DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

const {
  PORT = 3000,
  SECRET_KEY = 'dev-secret-key',
  DB_NAME = 'bitfilmsdb',
  DB_HOST = '127.0.0.1',
  DB_PORT = '27017',
  SITE_URL = `http://localhost:${PORT}`,
  HTTPS_SITE_URL = `https://localhost:${PORT}`,
} = process.env;

allowedCors = [
  SITE_URL,
  HTTPS_SITE_URL
];


module.exports.config = {
  PORT, SECRET_KEY, DB_NAME, DB_HOST, DB_PORT, allowedCors, DEFAULT_ALLOWED_METHODS
}
