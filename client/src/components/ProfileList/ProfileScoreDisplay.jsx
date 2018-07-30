import React, { Component } from "react";
import { CHINESE, WESTERN, COMBINED } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import CircularProgressBar from "../../utils/circularProgressBar";

const selector = (id, role) => {
    return role + "-score-for-" + id;
  },
  truncate = (string, length = 8) => {
    if (string.length > length) {
      return [string.substring(0, length - 1), "..."].join("");
    } else {
      return string;
    }
  };

class ScoreDisplay extends Component {
  callDraw() {
    const { _id, cScore, wScore, combinedScore } = this.props.data;

    CircularProgressBar(selector(_id, CHINESE), cScore / 5);
    CircularProgressBar(selector(_id, WESTERN), wScore / 5);
    CircularProgressBar(selector(_id, COMBINED), combinedScore / 5);
  }

  componentDidMount() {
    this.callDraw();
  }

  componentDidUpdate() {
    this.callDraw();
  }

  render() {
    const { id, namePrimary, active } = this.props,
      {
        name,
        cSign,
        wSign,
        cSignPrimary,
        wSignPrimary,
        cScore,
        wScore,
        combinedScore
      } = this.props.data,
      state = active ? "" : "hide";

    return (
      <div className={"right " + state}>
        <div className="col m4 xl6 score-block">
          <div className="score-block__title">
            <p>
              <span className="score-block__active-sign">{truncate(wSign) + " "}</span>
              <br className="hide-on-large-and-up" /> x{" "}
              <br className="hide-on-large-and-up" />
              {wSignPrimary}
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
              <span className="score-block__active-sign">{truncate(cSign) + " "}</span>
              <br className="hide-on-large-and-up" /> x{" "}
              <br className="hide-on-large-and-up" />
              {cSignPrimary}
            </p>
          </div>
          <div className="score-block__score">
            <div className={"score-block__decorative-circle " + COLORS.ACCENT1}>
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
              <span className="score-block__active-sign">{truncate(name, 10) + " "}</span>
              <br className="hide-on-large-and-up" /> x{" "}
              {truncate(namePrimary)}
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
