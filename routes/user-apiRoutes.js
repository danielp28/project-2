var db = require("../models");

module.exports = function(app){
    app.get("/api/user", function(req,res){
        db.User.findAll({
            // include: [db.Profile]
        }).then(function(dbUser){
            res.json(dbUser)
        })
    });

    app.get("/api/user:id", function(req,res){
        db.User.findOne({
            where: {
                id: req.params.id
            },
            // include: [db.Profile]
        }).then(function(dbUser){
            res.json(dbUser)
        })
    });

    app.post("/api/user", function(req, res) {
        db.User.create({            
            email: req.body.email,
            password: req.body.password
          })
          .then(function(dbUser) {
            res.json(dbUser);
          });
      });

    app.delete("/api/user/:id", function(req,res){
        db.User.destroy({
            where: {
                id:req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });

};