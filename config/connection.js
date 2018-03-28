var mysql = require("mysql");

var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "my_portfolio",
// });
// }

if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true //false
    });
  } else {
    // the application is executed on the local machine
    sequelize = new Sequelize("postgres:///my_db");
  }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;