
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var db = require("./models");
var htmlRoutes = require("./app/routing/htmlRoutes.js")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlRoutes(app, path, express)

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
