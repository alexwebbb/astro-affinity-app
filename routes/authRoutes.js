const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/demo",
    passport.authenticate("custom"),
    (req, res) => {
      res.redirect("/affinities");
    }
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "profile",
        "email",
        "https://www.googleapis.com/auth/user.birthday.read"
      ]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/affinities");
    }
  );

  app.get("/api/logout", async (req, res) => {
    await req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
