var db = require("../models");

module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.user_db.findAll({})
      .then(function (user_db) {
        res.json(user_db);
      });
  });
 //see one user
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

  // Create a new user
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

  // Delete a user by id
  app.delete("/api/users/:id", function (req, res) {
    db.user_db.destroy({ where: 
      { 
        id: req.params.id 
      } 
    }).then(function (user_db) {
      res.json(user_db);
    });
  });
  //update user info
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

// API LOG IN
app.post("/api/signup", function(req, res){
  var email = req.body.email;
  var password = req.body.email;

  db.User.create({ email, password}).then(function(dbUser){
    res.json(dbUser);
  }).catch(function(err){
    res.status(500).json(false);
  })
});
