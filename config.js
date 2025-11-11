// local mysql

const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'new_ss_property_inventory',
    multipleStatements: true
});

 
console.warn('DataBase Connected Successfully ss property');

module.exports = db;


// live server



// const mysql = require('mysql2/promise');

// const db = mysql.createPool({
//     host: 'turntable.proxy.rlwy.net',
//     port: 49229,
//     user: 'root',
//     password: 'uDgydrXReLDVobOSPJFiIrFEkExNShjv',
//     database: 'railway',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// console.warn('✅ Connected to Railway MySQL');

// module.exports = db;




