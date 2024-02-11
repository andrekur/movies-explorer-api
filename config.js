DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

const {
  NODE_ENV = 'dev',
  PORT = 3000,
  SECRET_KEY = 'dev-secret-key',
  DOMAIN = 'localhost',
} = process.env

const HTTP_SITE_URL = `http://${DOMAIN}:${PORT}`
const HTTPS_SITE_URL = `https://${DOMAIN}:${PORT}`

const DB_SETTINGS = {
  DB_NAME: 'bitfilmsdb',
  DB_HOST: '127.0.0.1',
  DB_PORT: '27017',
}

if (NODE_ENV === 'production') {
  const { DB_NAME, DB_HOST, DB_PORT } = process.env;
  DB_SETTINGS.DB_NAME = DB_NAME;
  DB_SETTINGS.DB_HOST = DB_HOST;
  DB_SETTINGS.DB_PORT = DB_PORT;
}

allowedCors = [
  HTTP_SITE_URL,
  HTTPS_SITE_URL
];


module.exports.config = {
  PORT, SECRET_KEY, DB_SETTINGS, allowedCors, DEFAULT_ALLOWED_METHODS
}
