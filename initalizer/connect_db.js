
const { Client } = require('pg');

// create a new client instance
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'demo_cube',
  password: 'postgres',
  port: '5432',
});

// connect to the database
client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
    return;
  } else {
    console.log('connected to database');
    
  }
});

// execute a query
client.query('SELECT * FROM mytable', (err, res) => {
  if (err) {
    console.error('error executing query', err.stack);
  } else {
    console.log(res.rows);
  }
});


