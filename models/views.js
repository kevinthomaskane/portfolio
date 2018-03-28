
module.exports = function(sequelize, DataTypes) {
    var View = sequelize.define("View", {
      num: DataTypes.INTEGER
    });
    return View;
  };