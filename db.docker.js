const Pool = require("pg").Pool;

const pool = new Pool({
  user: "user",
  password: "postgres",
  host: "db",
  port: 5432,
  database: "todosDB"
});

module.exports = pool;