module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.I
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING
    }
  });
  return User;
};
