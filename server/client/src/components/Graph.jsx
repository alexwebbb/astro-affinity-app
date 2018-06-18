import React, { Component } from "react";
import { scale } from "d3";
import { RadarChart } from "../utils/radarChart";

class Graph extends Component {
  getData(name) {
    const { affinities, indexToName, nameToIndex } = this.props.zodiac;

    return affinities[nameToIndex[name]].map((value, index) => {
      return { axis: indexToName[index], value };
    });
  }

  componentDidMount() {
    const margin = { top: 100, right: 100, bottom: 100, left: 100 },
      width =
        Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      ),
      color = scale.ordinal().range(["#EDC951", "#CC333F", "#00A0B0"]),
      radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: false,
        color: color
      };

    RadarChart(".radarChart", this.getData(this.props.sign), radarChartOptions);
  }

  render() {
    return (
      <div>
        <div className="radarChart" />
      </div>
    );
  }
}

export default Graph;
