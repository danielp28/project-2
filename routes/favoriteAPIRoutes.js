var db = require("../models");
module.exports = function(app){
    
    app.get("/api/favorite", function(req, res){
        var query = {};
        if (req.query.user_id)
        db.Favorite.findAll({}).then(function(user_db){

        })
    })
}

