var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.mustache.findAll({}).then(function(NAMEOFDB) {
      res.render("home", {
        msg: "Welcome!",
        mustaches: NAMEOFDB
      });
    });
  });

  // Load mustache page and pass in an mustache by id
  app.get("/mustache/:id", function(req, res) {
    db.mustache.findOne({ where: { id: req.params.id } }).then(function(
      NAMEOFDB
    ) {
      res.render("mustache", {
        mustache: NAMEOFDB
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
