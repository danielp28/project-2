var db = require("../models");
module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    if (!req.isAuthenticated()) {
      return res.status(401).json(false);
    }

    res.json(req.user);
  });
  app.get("/api/favorite", function(req, res) {
    db.User.findAll({
      where: {
        // eslint-disable-next-line camelcase
        user_id: req.user.id
      }
    }).then(function(favorites) {
      res.json(favorites);
    });
  });
};
