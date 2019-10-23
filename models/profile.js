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
    Profile.associate = function(models){
        Profile.belongsTo(models.User);
        Profile.hasMany(models.Favorite);
    }
    return Profile;
};