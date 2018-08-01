import React, { Component } from "react";
import * as M from "materialize-css";
import Credentials from "./Credentials";

class Landing extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".landing .carousel");
    M.Carousel.init(elems, { fullWidth: true });
  }

  render() {
    return (
      <div className="landing">
        <div className="carousel carousel-slider">
          <a className="carousel-item" href="#one!">
            <img src="https://lorempixel.com/800/400/food/1" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://lorempixel.com/800/400/food/2" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://lorempixel.com/800/400/food/3" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://lorempixel.com/800/400/food/4" />
          </a>
          <div className="carousel-fixed-item">
            <h1>Astrological Affinities App</h1>
          </div>
        </div>
        <div className="center-align landing__content group hoverable">
          <p className="landing__text">
            Astro App lets you see who you are compatible with, astrologically
            speaking. Enter yours and your friends' birthdates and see who the
            stars want you to end up with. Or just see which celebrity you would
            do well with!
          </p>
          <p className="landing__text">
            To get started, login with google. if you don't feel comfortable
            using your own credentials, here is a sample set
          </p>
          <Credentials />
        </div>
      </div>
    );
  }
}

export default Landing;
