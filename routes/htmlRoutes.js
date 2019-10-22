

var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"))
    });
  

  // Load user_db page and pass in an user_db by id
  app.get("/login", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/login.html"))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
