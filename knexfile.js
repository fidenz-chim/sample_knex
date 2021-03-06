// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          user : 'chim',
          password : '',
          database : 'test_knex',
          charset: 'utf8'
        },
        migrations: {
          directory: __dirname + '/knex/migrations',
        },
        seeds: {
          directory: __dirname + '/knex/seeds'
        }
      },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
