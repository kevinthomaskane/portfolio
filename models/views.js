
module.exports = function(sequelize, DataTypes) {
    var View = sequelize.define("View", {
      num: DataTypes.INTEGER
    }, 
    {timestamps: false});
    return View;
  };