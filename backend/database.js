const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_brasil',
    password: '1234',
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error adquiring client', err.stack);
    }
    console.log('Conexion exitosa');
    release();
});

module.exports = pool;
