import React, { Component } from "react";

import * as COLORS from "../../config/colors";

import CircularProgressBar from "./../../utils/circularProgressBar/circularProgressBar";

import { getAffinity as getChineseAffinity } from "../../utils/chineseZodiac";
import { getAffinity as getWesternAffinity } from "../../utils/westernZodiac";

const selector = (id, role) => {
    return role + "-score-for-" + id;
  },
  COMBINED = "combined",
  CHINESE = "chinese",
  WESTERN = "western";

class ScoreDisplay extends Component {
  componentDidUpdate() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = getChineseAffinity(cSignPrimary, cSign),
      wScore = getWesternAffinity(wSignPrimary, wSign);

    CircularProgressBar(selector(id, COMBINED), (cScore + wScore) / 10);
    CircularProgressBar(selector(id, CHINESE), cScore / 5);
    CircularProgressBar(selector(id, WESTERN), wScore / 5);
  }

  render() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = getChineseAffinity(cSignPrimary, cSign),
      wScore = getWesternAffinity(wSignPrimary, wSign);

    return (
      <div className="right">
        <div className="col m4 xl6 score-block">
          <div className="score-block__title">
            <p>
              {wSign} x 
            </p>
            <p>
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
              {cSign} x 
            </p>
            <p>
              {cSignPrimary}
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
          <p className="score-block__title--combined">Combined: </p>
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