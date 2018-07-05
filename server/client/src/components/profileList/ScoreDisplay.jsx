import React, { Component } from "react";

import CircularProgressBar from "./../../utils/circularProgressBar/circularProgressBar";

import * as chineseZodiac from "../../utils/chineseZodiac";
import * as westernZodiac from "../../utils/westernZodiac";

const selector = id => {
  return "score-for-" + id;
};

class ScoreDisplay extends Component {

  componentDidUpdate() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = chineseZodiac.getAffinity(cSignPrimary, cSign),
      wScore = westernZodiac.getAffinity(wSignPrimary, wSign);

    CircularProgressBar(selector(id), (cScore + wScore) / 10);
  }

  render() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = chineseZodiac.getAffinity(cSignPrimary, cSign),
      wScore = westernZodiac.getAffinity(wSignPrimary, wSign);

    return (
      <div>
        <p>Chinese: {cScore}</p>
        <p>Western: {wScore}</p>
        <div className={"circular-progress-bar " + selector(id)} />
      </div>
    );
  }
}

export default ScoreDisplay;
