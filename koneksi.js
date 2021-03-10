var mysql = require('mysql');

// koneksi ke database
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	passowrd: '',
	database: 'dbrestapi',
});

conn.connect((err) => {
	if (err) throw err;
	console.log('Mysql Terkoneksi');
});

module.exports = conn;