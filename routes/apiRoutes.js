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


module.exports = function (app) {

  app.get("/api/users", function (req, res) {
    res.json(userData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};

// API LOG IN
// app.post("/api/signup", function(req, res){
//   var email = req.body.email;
//   var password = req.body.email;

//   db.User.create({ email, password}).then(function(dbUser){
//     res.json(dbUser);
//   }).catch(function(err){
//     res.status(500).json(false);
//   })
// });

