const passport = require("passport");

module.exports = passport.authenticate("google", {
  successRedirect: "/",
  failureRedirect: "/login",
});
