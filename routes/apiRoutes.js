var db = require("../models");

module.exports = function (app) {
  // Get all mustaches
  app.get("/api/users", function (req, res) {
    db.user_db.findAll({})
      .then(function (user_db) {
        res.json(user_db);
      });
  });

  app.get("/api/users/:id", function (req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (user_db) {
        res.json(user_db)
      })
  })

  // Create a new example
  app.post("/api/users", function (req, res) {
    db.user_db.create({
      name: req.body.name,
      age: req.body.age,
      bio: req.body.bio,
      pictureURL: req.body.pictureURL
    }).then(function (user_db) {
      res.json(user_db);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function (req, res) {
    db.user_db.destroy({ where: 
      { 
        id: req.params.id 
      } 
    }).then(function (user_db) {
      res.json(user_db);
    });
  });

  app.put("/api/users", function(req,res){
    db.user_db.update(req.body,
      {
        where: {
          id:req.body.id
        }
      }).then(function(user_db){
        res.json(user_db)
      });
  });
};
