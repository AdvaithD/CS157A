const options = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'user12',
    password: 'ps',
    database: 'adafruit'
  }
}

const knex = require('knex')(options)
