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


var sequelize;

if (process.env.JAWSDB_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
      dialect:  'mysql',
      protocol: 'mysql',
      logging:  true //false
    });
  } else {
    // the application is executed on the local machine
    sequelize = new Sequelize("mysql:///my_portfolio");
  }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;