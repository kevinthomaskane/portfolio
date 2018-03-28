var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    console.log("jaws")
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log("local")
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_portfolio",
});
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;