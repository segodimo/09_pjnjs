const express = require('express');
const app = express();


// *******************************************************************************
const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: 'http://localhost:3306', 
     user:'root', 
     password: '105474',
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

// *******************************************************************************



//middlewares
// app.use(cors());
app.use(express.json());


//routes
app.get('/users', (req, res) => res.send('USERS USERS'));
app.get('/routes', (req, res) => res.send('USERS ROUTES'));

module.exports = app;
