import React, { Component } from "react";
import { CHINESE, WESTERN } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import CircularProgressBar from "../../utils/circularProgressBar/circularProgressBar";

const selector = (id, role) => {
    return role + "-score-for-" + id;
  },
  COMBINED = "combined";

class ScoreDisplay extends Component {
  callDraw() {
    const { _id, cScore, wScore, combinedScore } = this.props.data;

    CircularProgressBar(selector(_id, CHINESE), cScore / 5);
    CircularProgressBar(selector(_id, WESTERN), wScore / 5);
    CircularProgressBar(selector(_id, COMBINED), combinedScore / 5);
  }

  componentDidUpdate() {
    this.callDraw();
  }

  render() {
    const { id, namePrimary, active } = this.props,
      { name, cSign, wSign, cSignPrimary, wSignPrimary, cScore, wScore, combinedScore } = this.props.data,
      state = active ? "" : "hide";

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
              {combinedScore}
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
