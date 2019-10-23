// create Profile table
module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
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
  return Profile;
};

// create Favorites table
module.exports = function (sequelize, DataTypes){
  var Favorites = sequelize.define("Favorites", {
    mustache: {
      type: DataTypes.BOOLEAN
    }
  });
  return Favorites;
}
