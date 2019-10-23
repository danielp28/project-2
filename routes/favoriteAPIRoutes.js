var db = require("../models");
module.exports = function(app){
    app.get("/api/favorite", function(req, res){
        db.user_db.findAll({}).then(function(user_db))
    })
}

