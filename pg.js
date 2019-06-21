const knex = require('knex');
const path = require('path');
const { Model } = require('objection');

let postgresDatabase;

function initPostgres(app) {
  const config = app.get('config');

  postgresDatabase = knex({
    client: 'pg',
    connection: {
      host: config.pg.host,
      user: config.pg.user,
      password: config.pg.password,
      database: config.pg.database,
      port: config.pg.port
    },
    pool: {
      min: config.pg.pool.min,
      max: config.pg.pool.max
    },
    migrations: {
      tableName: 'migrations',
      directory: path.resolve(path.dirname(__filename), '../db/migrations')
    },
    seeds: {
      directory: path.resolve(path.dirname(__filename), '../db/seeds')
    }
  });

  // If the Node process ends, cleanup existing connections
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);

  app.set('postgresDatabase', postgresDatabase);

  // Bind all Models to a knex instance. If you only have one database in
  // your server this is all you have to do. For multi database systems, see
  // the Model.bindKnex method.
  Model.knex(postgresDatabase);

  return postgresDatabase;
}

function cleanup() {
  postgresDatabase.destroy(function() {
    process.exit(0);
  });
}

function getDB() {
  return postgresDatabase;
}

module.exports.init = {
    init: initPostgres,
    getDB: getDB
}
