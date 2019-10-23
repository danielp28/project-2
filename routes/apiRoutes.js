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
  app.post("/api/profile", function (req, res) {
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
    db.user_db.destroy({
      where:
      {
        id: req.params.id
      }
    }).then(function (user_db) {
      res.json(user_db);
    });
  });
  //update user info
  app.put("/api/users", function (req, res) {
    db.user_db.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (user_db) {
        res.json(user_db)
      });
  });
};

app.put("api/examples/:id", function(req, res){
  db.Exampl.update({ where: { id: req.params.id}})
})

// app.get("/signup", function(req, res){
//   res.sendFile(path.join(__dirname, "../pulic/signup.html"))
// }

// app.post("/api/signup", function(req, res){
//   db.User.create(req.body).then(function(){
//     res.json(true);

//   })
// })
