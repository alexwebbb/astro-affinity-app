import React, { Component } from "react";
import * as M from "materialize-css";
import Credentials from "./Credentials";

class Landing extends Component {

  componentDidMount() {
    const elems = document.querySelectorAll(".landing .modal");
    M.Modal.init(elems);
  }

  render() {
    return (
      <div className="center-align landing group">
        <h1>Astrological Affinities App</h1>
        <p className="landing__text">
          To get started, login with google. if you don't feel comfortable using
          your own credentials, here is a sample set
        </p>
        <Credentials />
        <p className="landing__text">
          Of course, this site utilizes local storage on your device, ie a
          cookie, to track whether you are logged in. Thus, the site cannot be
          used in incognito mode.
        </p>
        <p className="right">- Alex Webb</p>
      </div>
    );
  }
}

export default Landing;
