// create user table
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING
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

// create Favorites table
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    mustache: {
      type: DataTypes.BOOLEAN
    }
  });
};
