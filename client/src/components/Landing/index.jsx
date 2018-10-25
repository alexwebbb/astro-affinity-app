import React, { Component } from "react";
import * as M from "materialize-css";
import Credentials from "./Credentials";
import IMAGE from "./imageData";

const carouselImage = element => {
  return (
    <div className="carousel-item" href={"#" + element.number + "!"} key={element.number} >
      <div style={{position: "fixed", top: "0px", right: "0px"}}>
        {element.badge}
      </div>
      <img className="landing__image" src={element.url} alt={element.alt}/>
    </div>
  );
};

class Landing extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".landing .carousel-slider");
    M.Carousel.init(elems, { fullWidth: true });
    
  }

  render() {
    return (
      <div className="landing">
        <div className="carousel carousel-slider landing__carousel">
          {IMAGE.map(e => carouselImage(e))}
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
            To get started, login with google. Unfortunately, it is not currently possible to use a google account as a generic login. Feel free to use a throwaway account!
          </p>
          {/* <Credentials /> */}
        </div>
      </div>
    );
  }
}

export default Landing;
