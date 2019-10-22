// create user table
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pictureURL: {
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
  return Favorites;
};
