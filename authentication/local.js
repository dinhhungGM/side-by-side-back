module.exports = (app) => {
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;
  const renters = require("../models/renters");
  const bcrypt = require("bcryptjs");
  passport.use(
    new LocalStrategy(function (username, password, done) {
      renters.findOne({ username: username }, function (err, renter) {
        if (err) {
          return done(err);
        }
        if (!renter) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, renter.password)) {
          return done(null, false);
        }
        return done(null, renter);
      });
    })
  );
};