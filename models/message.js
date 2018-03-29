

module.exports = function(sequelize, DataTypes){
    var Message = sequelize.define("Message", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        message: DataTypes.TEXT
    });
    return Message;
  };
