const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '192.168.0.253',
  user: 'dba',
  port: 3306,
  password: 'sopro123',
  database: 'consultas_medicas',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;