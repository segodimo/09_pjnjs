const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// *******************************************************************************
// const mariadb = require('mariadb');
// const connection = mariadb.createConnection({
//   host: 'localhost', // MYSQL HOST NAME
//   user: 'root',        // MYSQL USERNAME
//   password: '105474',    // MYSQL PASSWORD
//   database: 'tbl0901'      // MYSQL DB NAME
// });
// module.exports = connection;

// *******************************************************************************
// TEST 1

// const mariadb = require('mariadb');
// const pool = mariadb.createPool({
//   // host: 'http://localhost',
//   host: 'localhost',
//   // port: '65074',
//   user: 'root',
//   password: '105474',
//   connectionLimit: 5
// });

// async function asyncFunction() {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query("SELECT * FROM tbl0901");
//     console.log('+ + + + + + + + + + + FOI + + + + + + + + + + +')
//     // const rows = await conn.query("SELECT 1 as val");
//     console.log(rows); //[ {val: 1}, meta: ... ]
//     // const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
//     // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

//   } catch (err) {
//     console.log('************************** PAILA **************************')
//     throw err;
//   } finally {
//     if (conn) return conn.end();
//   }
// }

// asyncFunction()
// *******************************************************************************


// *******************************************************************************
// TEST 2

const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({ host: 'localhost', user: 'root', password: '105474' });
conn.query("SELECT * FROM tbl0901", (err, rows) => {
  console.log(rows);
});
// *******************************************************************************



// *******************************************************************************
//middlewares
// app.use(cors());
app.use(express.json());


//routes
app.get('/users', (req, res) => res.send('USERS USERS'));
app.get('/routes', (req, res) => res.send('USERS ROUTES'));

module.exports = app;
