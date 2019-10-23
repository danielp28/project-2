var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
    res.send(req.param("whatever"));
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
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