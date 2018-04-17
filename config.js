const env = process.env.NODE_ENV || 'development';

process.env['DEBUG'] = 'hack-ig*';

if (env === 'development') {
  process.env.PORT = 3000;
} else if (env === 'test') {
  process.env.PORT = 3000;
}
