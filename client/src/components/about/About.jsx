import React, { Component } from "react";
import * as M from "materialize-css";

import top from "./../../images/greg-rakozy-38802-unsplash-top.jpg";
import bottom from "./../../images/greg-rakozy-38802-unsplash-bottom.jpg";
import app_view from "./../../images/app-view.png";
import payment_example from "./../../images/payment-example.png";

import ImageCredit from "./ImageCredit";

class About extends Component {
  componentDidMount() {
    const pElems = document.querySelectorAll(".parallax"),
      mElems = document.querySelectorAll('.materialboxed');
    document.parallaxInstances = M.Parallax.init(pElems);
    document.materialboxedInstances = M.Materialbox.init(mElems);
  }

  render() {
    return (
      <div>
        <div
          class="parallax-container"
          style={{ zIndex: "5", height: "200px" }}
        >
          <div class="parallax">
            <img src={top} alt="by Greg Rakozy on Unsplash" role="presentation"/>
          </div>
        </div>
        <div class="section white">
          <div class="row container about">
            <p>
              <h1 className="about__heading">
                Welcome to the Astrological Affinity App.{" "}
              </h1>
              This capstone app is demonstration of a fullstack JavaScript app
              that utilizes{" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                Node.js
              </a>
              and{" "}
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Express
              </a>{" "}
              with{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              and{" "}
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>{" "}
              to create a single page app experience. This app also utilizes{" "}
              <a
                href="https://d3js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                D3.js
              </a>{" "}
              and{" "}
              <a
                href="https://materializecss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Materialize
              </a>{" "}
              to create an engaging visual and interactive experience.
            </p>
            <img
              src={app_view}
              alt="view of the app in action"
              class="left materialboxed"
              width="270"
              style={{ margin: "5px 15px 5px 0px"}}
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
              style={{ margin: "5px 0px 5px 15px"}}
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
            <p className="right about__signature">- Alex Webb</p>
          </div>
        </div>
        <div
          class="parallax-container"
          style={{ zIndex: "5", height: "220px" }}
        >
          <div class="parallax">
            <img src={bottom} alt="by Greg Rakozy on Unsplash" role="presentation" />
          </div>
        </div>
        <ImageCredit />
      </div>
    );
  }
}

export default About;
