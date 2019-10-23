var db = require("../models");

module.exports = function(app){
    app.get("/api/user", function(req,res){
        db.User.findAll({
            include: [db.Profile]
        }).then(function(dbUser){
            res.json(dbUser)
        })
    });

    app.get("/api/user/:id")
}