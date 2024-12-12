const mysql=require('mysql2')
require('dotenv/config')

var dbConn=mysql.createPool({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB_NAME,
    host:process.env.MYSQL_INSTANCE_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
module.exports=dbConn.promise()