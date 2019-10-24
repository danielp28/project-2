// create Favorites table
module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define("Favorite", {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.Profile);
    Favorite.belongsTo(models.User);
  };
  return Favorite;
};
