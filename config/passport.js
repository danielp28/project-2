// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;
// var db = require("../models");

// passport.use(
//     new LocalStrategy({
//         usernameField: "email"
//     }, function (email, password, done){
//             db.User.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function(dbUser){
//                 if(dbUser && dbUser.checkPassword(password)){
//                     return done(null, dbUser);
//                 } else{
//                     return done("Unable to login user with that name and password")
//                 }
//             }).catch(function(err){
//                 done(err)
//             }
//         }
    
//     )
// );

// passport.serializeUser(function(user,cb){ return cb (null, user)});
// passport.deserializeUser(function(user,cb){ return cb (null, user)});

// module.exports = passport;