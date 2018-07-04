import React, { Component } from "react";
import * as d3 from "d3";

import { drawCircularProgressBar } from "./../../utils/circularProgressBar/circularProgressBar";

import * as chineseZodiac from "../../utils/chineseZodiac";
import * as westernZodiac from "../../utils/westernZodiac";

const selector = id => {
  return "score-for-" + id;
};

class ScoreDisplay extends Component {

  componentDidMount() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = chineseZodiac.getAffinity(cSignPrimary, cSign),
      wScore = westernZodiac.getAffinity(wSignPrimary, wSign);

    console.log(id);

    d3.select("." + selector(id)).call(
      drawCircularProgressBar,
      (cScore + wScore) / 10
    );
  }

  componentDidUpdate() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = chineseZodiac.getAffinity(cSignPrimary, cSign),
      wScore = westernZodiac.getAffinity(wSignPrimary, wSign);
    
      // selector(id)
      d3.select("." + selector(id)).call(
      drawCircularProgressBar,
      (cScore + wScore) / 10
    );
  }

  render() {
    const { id, cSign, wSign, cSignPrimary, wSignPrimary } = this.props,
      cScore = chineseZodiac.getAffinity(cSignPrimary, cSign),
      wScore = westernZodiac.getAffinity(wSignPrimary, wSign);


    return (
      <div>
        <p>Chinese: {cScore}</p>
        <p>Western: {wScore}</p>
        <div className={selector(id)} />
      </div>
    );
  }
}

export default ScoreDisplay;
