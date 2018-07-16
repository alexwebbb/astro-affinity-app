import React, { Component } from "react";
import ZODIAC, { CHINESE, WESTERN } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import CircularProgressBar from "../../utils/circularProgressBar/circularProgressBar";

const selector = (id, role) => {
    return role + "-score-for-" + id;
  },
  COMBINED = "combined";

class ScoreDisplay extends Component {

  callDraw() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = ZODIAC[CHINESE].getAffinity(cSignPrimary, cSign),
      wScore = ZODIAC[WESTERN].getAffinity(wSignPrimary, wSign);

    CircularProgressBar(selector(id, COMBINED), (cScore + wScore) / 10);
    CircularProgressBar(selector(id, CHINESE), cScore / 5);
    CircularProgressBar(selector(id, WESTERN), wScore / 5);
  }

  componentDidUpdate() {
    this.callDraw();
  }

  render() {
    const { id, name, namePrimary, cSign, wSign, cSignPrimary, wSignPrimary, active } = this.props,
      cScore = ZODIAC[CHINESE].getAffinity(cSignPrimary, cSign),
      wScore = ZODIAC[WESTERN].getAffinity(wSignPrimary, wSign),
      state = (active ? "" : "hide");

    return (
      <div className={"right " + state}>
        <div className="col m4 xl6 score-block">
          <div className="score-block__title">
            <p>
              <span className="score-block__active-sign">{wSign + " "}</span>
              <br className="hide-on-large-only" /> x {wSignPrimary}
            </p>
          </div>
          <div className="score-block__score">
            <div className={"score-block__decorative-circle " + COLORS.ACCENT2}>
              {wScore}
            </div>
          </div>
          <div
            className={
              "score-block__circular-progress-bar " + selector(id, WESTERN)
            }
          />
        </div>
        <div className="col m4 xl6 score-block">
          <div className="score-block__title">
            <p>
              <span className="score-block__active-sign">{cSign + " "}</span>
              <br className="hide-on-large-only" /> x {cSignPrimary}
            </p>
          </div>
          <div className="score-block__score">
            <div className={"score-block__decorative-circle " + COLORS.ACCENT}>
              {cScore}
            </div>
          </div>
          <div
            className={
              "score-block__circular-progress-bar " + selector(id, CHINESE)
            }
          />
        </div>
        <div className="col m4 xl12 score-block">
        <div className="score-block__title">
            <p>
              <span className="score-block__active-sign">{name + " "}</span>
              <br className="hide-on-large-only" /> x {namePrimary}
            </p>
          </div>
          <div className="score-block__score">
            <div className={"score-block__decorative-circle " + COLORS.WHITE}>
              {(cScore + wScore) / 2}
            </div>
          </div>
          <div
            className={
              "score-block__circular-progress-bar--combined " +
              selector(id, COMBINED)
            }
          />
        </div>
      </div>
    );
  }
}

export default ScoreDisplay;
