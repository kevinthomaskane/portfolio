
module.exports = function(sequelize, DataTypes) {
    var View = sequelize.define("View", {
      city: DataTypes.STRING,
      region: DataTypes.STRING,
      country: DataTypes.STRING
    });
    return View;
  };