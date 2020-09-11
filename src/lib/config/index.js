module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '123456',
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
// pool is an optional config, allowing for max/min number of connections in pool
// acquire/ide are maximum time a connection can be idle or before it throws an error
