module.exports = {
  pg: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT || 5432
  },
  mongo: {
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    database: process.env.MONGO_DB,
    port: process.env.MONGO_PORT || 27017
  }
};