var db = require("../models");

module.exports = function(app) {
  // Get all mustaches
  app.get("/api/mustaches", function(req, res) {
    db.user_db.findAll({
      include: [db.Post]
    }).then(function(user_db) {
      res.json(user_db);
    });
  });

  // Create a new example
  app.post("/api/mustaches", function(req, res) {
    db.user_db.create(req.body).then(function(user_db) {
      res.json(user_db);
    });
  });

  // Delete an example by id
  app.delete("/api/mustaches/:id", function(req, res) {
    db.user_db.destroy({ where: { id: req.params.id } }).then(function(
      user_db
    ) {
      res.json(user_db);
    });
  });
};
