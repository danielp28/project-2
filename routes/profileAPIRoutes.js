/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Get all profile
  app.get("/api/profile", function(req, res) {
    db.Profile.findAll({}).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
  //see one Profile
  app.get("/api/profile/:id", function(req, res) {
    db.Profile.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // Create a new Profile
  app.post("/api/profile", function(req, res) {
    db.Profile.create({
      name: req.body.name,
      age: req.body.age,
      bio: req.body.bio,
      pictureURL: req.body.pictureURL
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // Delete a Profile by id
  app.delete("/api/profile/:id", function(req, res) {
    db.Profile.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
  //update Profile info
  app.put("/api/profile", function(req, res) {
    db.Profile.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
};
