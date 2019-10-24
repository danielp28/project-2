/* eslint-disable camelcase */
var db = require("../models");
console.log(db);
module.exports = function(app) {
  // Get all profile
  app.get("/api/profile", function(req, res) {
    db.Profile.findAll({}).then(function(user_db) {
      res.json(user_db);
    });
  });
  //see one user
  app.get("/api/profile/:id", function(req, res) {
    db.Profile
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(user_db) {
        res.json(user_db);
      });
  });

  // Create a new user
  app.post("/api/profile", function(req, res) {
    console.log(req.body);
    db.Profile
      .create({
        name: req.body.name,
        age: req.body.age,
        bio: req.body.bio,
        pictureURL: req.body.pictureURL
      })
      .then(function(user_db) {
        res.json(user_db);
      });
  });

  // Delete a user by id
  app.delete("/api/profile/:id", function(req, res) {
    db.Profile
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(user_db) {
        res.json(user_db);
      });
  });
  //update user info
  app.put("/api/profile", function(req, res) {
    db.Profile
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(user_db) {
        res.json(user_db);
      });
  });
};
