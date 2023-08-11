const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQLRoot@123',
    database: 'myData'
    // port:'3006'
});

connection.connect(function(error){
    if(!!error)
    {
        console.log(error);
    }
    else
    {
        console.log('Database Connected Successfully.!');
    }
});

module.exports = connection;

//he mysql.createConnection: This is the method used to establish a connection to the MySQL database. The provided configuration includes the host, user, password, and database name.