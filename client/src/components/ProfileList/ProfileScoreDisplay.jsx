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
    const { active } = this.props,
      { _id } = this.props.profile;

    if (active) {
      [CHINESE, WESTERN, COMBINED].forEach(function(name) {
        CircularProgressBar(
          selector(_id, name),
          this.props.profile[name].score / 5
        );
      }, this);
    }
  }

  componentDidMount() {
    this.callDraw();
  }

  componentDidUpdate() {
    this.callDraw();
  }

  render() {
    const { id, namePrimary, active } = this.props,
      data = this.props.profile,
      { name } = this.props.profile,
      state = active ? "" : "hide";

    return (
      <div className={"right " + state}>
        {[
          { zodiac: WESTERN, color: COLORS.ACCENT2 },
          { zodiac: CHINESE, color: COLORS.ACCENT1 }
        ].reduce(function(a, { zodiac, color }) {
          return a.concat(
            <div className="col m4 xl6 score-block" key={selector(id, zodiac)}>
              <div className="score-block__title">
                <p>
                  <span className="score-block__active-sign">
                    {truncate(data[zodiac].sign) + " "}
                  </span>
                  <br className="hide-on-large-and-up" /> x{" "}
                  <br className="hide-on-large-and-up" />
                  {data[zodiac].signPrimary}
                </p>
              </div>
              <div className="score-block__score">
                <div className={"score-block__decorative-circle " + color}>
                  {data[zodiac].score}
                </div>
              </div>
              <div
                className={
                  "score-block__circular-progress-bar " + selector(id, zodiac)
                }
              />
            </div>
          );
        }, [])}
        <div className="col m4 xl12 score-block">
          <div className="score-block__title">
            <p>
              <span className="score-block__active-sign">
                {truncate(name, 10) + " "}
              </span>
              <br className="hide-on-large-and-up" /> x {truncate(namePrimary)}
            </p>
          </div>
          <div className="score-block__score">
            <div className={"score-block__decorative-circle " + COLORS.WHITE}>
              {data[COMBINED].score}
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
