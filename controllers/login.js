const passport = require("passport");
const jwt = require("jsonwebtoken");
const { privateKey } = require("../keys")

module.exports = (req, res, next) => {
  console.log(req.body)
  passport.authenticate("local", (err, renter) => {
    if (err) res.json("Loi server");
    if (!renter) res.json("Username or password is not correct");
    else {
      const token = jwt.sign({ id: renter._id }, privateKey, {
        algorithm: "RS256",
      });
      res.cookie('token', token)
      res.json({ token: token });
      
    }
  })(req, res, next);
};
