import React, { Component } from "react";
import * as M from "materialize-css";
import ImageCredit from "./ImageCredit";
import link from "./../../utils/externalLink.jsx";

const top =
    "https://res.cloudinary.com/execool/image/upload/v1532923260/astro-app/greg-rakozy-38802-unsplash-top.jpg",
  bottom =
    "https://res.cloudinary.com/execool/image/upload/v1532923260/astro-app/greg-rakozy-38802-unsplash-bottom.jpg",
  app_view =
    "https://res.cloudinary.com/execool/image/upload/v1532957701/astro-app/app-view.png",
  payment_example =
    "https://res.cloudinary.com/execool/image/upload/v1532922949/astro-app/payment-example.png";

class About extends Component {
  componentDidMount() {
    const pElems = document.querySelectorAll(".about .parallax"),
      mElems = document.querySelectorAll(".about .materialboxed");
    M.Parallax.init(pElems);
    M.Materialbox.init(mElems);
  }

  render() {
    return (
      <div className="about">
        <div
          className="parallax-container"
          style={{ zIndex: "5", height: "200px" }}
        >
          <div className="parallax">
            <img
              src={top}
              alt="by Greg Rakozy on Unsplash - A view of stars"
              role="presentation"
            />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h1 className="about__heading">
              Welcome to the Astrological Affinity App.{" "}
            </h1>
            <p>
              This capstone app is demonstration of a fullstack JavaScript app
              that utilizes {link("Node.js", "nodejs.org")} and{" "}
              {link("Express", "expressjs.com")} with{" "}
              {link("React", "reactjs.org")} and {link("Redux", "redux.js.org")}{" "}
              to create a single page app experience.
            </p>
            <br />
            <p>
              {link("D3.js", "d3js.org")} and{" "}
              {link("Materialize", "materializecss.com")} are also utilized to
              create an engaging visual and interactive experience.
            </p>
            <br />
            <div className="group">
              <img
                src={app_view}
                alt="view of the app in action"
                className="right materialboxed z-depth-5"
                width="270"
                style={{ margin: "5px 0px 20px 30px" }}
              />
              <p>
                With Astro App, a user can create an account and add a profile
                with their birthdate, and the app will calculate their western
                zodiac sign and chinese sign and use those to determine what
                their affinity is with your own or others. It also allows you to
                sort profiles based on their affinity using a particular zodiac.
              </p>
            </div>
            <br />
            <div className="group">
              <img
                className="left materialboxed z-depth-5"
                width="270"
                src={payment_example}
                alt="Example of a payment being applied to purchase more slots"
                style={{ margin: "5px 30px 20px 0px" }}
              />
              <p>
                Using the app does not require you to make a purchase. However,
                you are only given five profile slots initially. Taking
                inspiration from the "free to play" model seen in phone games,
                you must purchase additional slots to make comparisons involving
                larger numbers of people.
              </p>
            </div>
            <br />
            <p>
              Maybe you and your crush are a perfect match. Or someone you never
              expected is! Give the Astro App demo a try today.
            </p>

            <div className="right">
              <p className="about__signature">- Alex Webb</p>
              <p className="about__email">
                <a href="mailto:alexwebbb@protonmail.com">
                  alexwebbb@protonmail.com
                </a>
              </p>
            </div>
          </div>
          <p className="about__github center-align">
            {link("Visit on Github", "github.com/alexwebbb/astro-affinity-app")}
          </p>
          <p className="center">
            Celebrity info and copy used in autofill button is sourced from{" "}
            {link("Famous Birthdays", "famousbirthdays.com")}.
          </p>
        </div>
        <div
          className="parallax-container"
          style={{ zIndex: "5", height: "220px" }}
        >
          <div className="parallax">
            <img
              src={bottom}
              alt="by Greg Rakozy on Unsplash - A person looking at the stars"
              role="presentation"
            />
          </div>
        </div>
        <ImageCredit />
      </div>
    );
  }
}

export default About;
