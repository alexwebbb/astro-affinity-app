import React from "react";
import ZODIAC from "../../utils/zodiac";
import Graph from "./Graph";


export default (state, props) => {
    const { currentZodiac } = state,
      { name, birthdate } = props;
    return (
      <div className="card-title">
        <h1 style={{ fontSize: "0.6em", margin: "0px" }}>
          Currently Selected: <br />
          <span className="graph__active-sign">{name}</span>
        </h1>
        <h2 style={{ fontSize: "1.4em", margin: "0px" }}>
          Comparing to{" "}
          <span className="graph__active-sign">
            {ZODIAC[currentZodiac].getSign(birthdate)}
          </span>
        </h2>
        <Graph
          birthdate={birthdate}
          zodiac={ZODIAC[currentZodiac]}
          selector="radarChart"
          title={ZODIAC[currentZodiac].name}
        />
      </div>
    );
  }