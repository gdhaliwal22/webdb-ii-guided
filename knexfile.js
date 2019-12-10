// Update with your config settings.

/*
this file contains instructions knex needs to connect to the database

Each key on the xported object has the configuation for a database enviroment (dev, productions, testing, etc)

The knex CLI will use the configuration on this file to find the DB.

The knex CLI will use the "develpment" enviroment by default, but we can overried that behavior.
*/

module.exports = {
  //teaches knex to connect to the development database
  development: {
    client: "sqlite3",
    useNullAsDefault: true, // only needed when using SQLite3
    connection: {
      filename: "./data/produce.db3" // where is the database file?
    },
    migrations: {
      directory: "./data/migrations" // will be created automatically
    },
    seeds: {
      directory: "./data/seeds" // will be created automatically
    }
  }
};
