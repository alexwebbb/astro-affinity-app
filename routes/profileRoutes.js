const mongoose = require("mongoose"),
  requireLogin = require("../middlewares/requireLogin"),
  requireCredits = require("../middlewares/requireCredits"),
  Profile = mongoose.model("profiles");

module.exports = app => {
  app.get("/api/profiles", requireLogin, async (req, res) => {
    const profiles = await Profile.find({ _user: req.user.id });

    res.send(profiles);
  });

  app.post("/api/profiles", requireLogin, requireCredits, async (req, res) => {
    const { name, birthdate, description } = req.body,
      profile = new Profile({
        name,
        birthdate,
        description,
        _user: req.user.id
      });

    try {
      const { _id } = await profile.save(),
        profiles = await Profile.find({ _user: req.user.id });
      
      req.user.primary = _id;
      req.user.credits -= 1;

      const user = await req.user.save();

      res.send({ user, profiles, id: _id });
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/profiles", requireLogin, async (req, res) => {
    try {
      const result = await Profile.findByIdAndRemove(req.body.id),
        profiles = await Profile.find({ _user: req.user.id });

      if (result !== null) {
        req.user.credits += 1;
      } else {
        return;
      }
      const user = await req.user.save();

      res.send({ user, profiles });
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
