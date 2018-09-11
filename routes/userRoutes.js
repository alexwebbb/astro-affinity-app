const mongoose = require("mongoose"),
  requireLogin = require("../middlewares/requireLogin"),
  Profile = mongoose.model("profiles"),
  User = mongoose.model("users");

module.exports = app => {
  app.post("/api/new_user", requireLogin, async (req, res) => {
    const { flag } = req.body;

    try {
      if (flag) {
        const { n } = await Profile.deleteMany({ _user: req.user.id });
        req.user.credits += n;
      }
      req.user.newUserFlag = flag;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/profiles/set", requireLogin, async (req, res) => {
    const { id } = req.body;

    try {
      req.user.primary = id;
      const user = await req.user.save();
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/current_user", requireLogin, async (req, res) => {
    try {
      await Profile.deleteMany({ _user: req.user.id });
      await User.deleteOne({ _id: req.user.id });
      res.send({ user: null, profiles: null });
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
