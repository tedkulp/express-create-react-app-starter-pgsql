module.exports = {
  development: {
    username: process.env.DOCKER_POSTGRES_USERNAME || 'postgres',
    password: process.env.DOCKER_POSTGRES_PASSWORD || '',
    database: process.env.DOCKER_POSTGRES_DATABASE || 'example',
    host: process.env.DOCKER_POSTGRES_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOSTNAME,
    dialect: 'postgres',
  },
}