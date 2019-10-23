//   create User table
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    User.associate = function(models){
        console.log(models);
        User.hasMany(models.Favorite);
        User.hasOne(models.Profile);
    }
    return User;
}