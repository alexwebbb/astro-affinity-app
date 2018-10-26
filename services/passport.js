const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  CustomStrategy = require("passport-custom").Strategy
  mongoose = require("mongoose"),
  keys = require("../config/keys"),
  User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new CustomStrategy(async (req, done) => {
    const existingUser = await User.findOne({ googleId: 0 });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({
      googleId: 0
    }).save();
    done(null, user);
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: profile.id,
        googleBday: profile.birthday
      }).save();
      done(null, user);
    }
  )
);
