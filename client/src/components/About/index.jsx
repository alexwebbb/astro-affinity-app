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
          class="parallax-container"
          style={{ zIndex: "5", height: "200px" }}
        >
          <div class="parallax">
            <img
              src={top}
              alt="by Greg Rakozy on Unsplash - A view of stars"
              role="presentation"
            />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <p>
              <h1 className="about__heading">
                Welcome to the Astrological Affinity App.{" "}
              </h1>
              This capstone app is demonstration of a fullstack JavaScript app
              that utilizes {link("Node.js", "nodejs.org")} and{" "}
              {link("Express", "expressjs.com")} with{" "}
              {link("React", "reactjs.org")} and {link("Redux", "redux.js.org")}{" "}
              to create a single page app experience. This app also utilizes{" "}
              {link("D3.js", "d3js.org")} and{" "}
              {link("Materialize", "materializecss.com")} to create an engaging
              visual and interactive experience.
            </p>
            <img
              src={app_view}
              alt="view of the app in action"
              class="left materialboxed"
              width="270"
              style={{ margin: "5px 15px 5px 0px" }}
            />
            <p>
              This app allows a user to create an account, add a profile with
              their birthdate, and the app will calculate their western zodiac
              sign and chinese sign and use those to determine what their
              affinity is with other profiles that are added. It also allows you
              to sort profiles based on their affinity using a particular
              zodiac.
            </p>
            <p>
              Many people take astrology and the zodiacs very seriously. The
              data used in this project was hand transcribed from charts found
              via google by myself. It is by no means conclusive in the meaning
              behind the scores granted, and a serious astrologer should be
              sought out if deeper analysis is desired.
            </p>
            <img
              className="right materialboxed"
              width="270"
              src={payment_example}
              alt="Example of a payment being applied to purchase more slots"
              style={{ margin: "5px 0px 5px 15px" }}
            />
            <p>
              The goal of the app is to allow users to have fun making quick
              comparisons to people they know, without having to do more
              rigorous analysis. Because this app is just a demonstration, a
              "social media" approach was not used, ie you cannot see or rate
              other existing users, although that type of utility can be easily
              added in the future.
            </p>
            <p>
              One more feature I will make note of, is the "slots" you will see
              when using the app. In order to use the app, no purchase is
              necessary. However, you are only given five profile slots
              initially. If you wish to make comparisons with large numbers of
              people, you must either purchase additional slots, or be willing
              to delete and re-add profiles by hand.
            </p>
            <p>
              Celebrity info and copy used in autofill button is sourced from{" "}
              {link("Famous Birthdays", "famousbirthdays.com")}.
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
        </div>
        <div
          class="parallax-container"
          style={{ zIndex: "5", height: "220px" }}
        >
          <div class="parallax">
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
