
module.exports = function(sequelize, DataTypes) {
    var View = sequelize.define("View", {
      num: {
        type: DataTypes.STRING,
        defaultValue: 0,
        }
    });
    return View;
  };