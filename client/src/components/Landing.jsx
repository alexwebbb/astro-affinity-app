import React from "react";

const Landing = () => {
  return (
    <div className="center-align landing group">
      <h1>Astrological Affinities App</h1>
      <p className="landing__text">
        To get started, login with google. if you don't feel comfortable using
        your own credentials, here is a sample set
      </p>
      <p className="landing__credentials">
        Username is developer test login at gmail dot com, and the password is
        "long passwords are secure" without the spaces.
      </p>
      <p className="landing__text">
        Of course, this site stores utilizes local storage on your device, ie a
        cookie, to track whether you are logged in. Thus, the site cannot be
        used in incognito mode.
      </p>
      <p className="right">- Alex Webb</p>
    </div>
  );
};

export default Landing;
