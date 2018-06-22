import React, { Component } from "react";
import { scale } from "d3";
import { RadarChart } from "../../utils/radarChart";

class Graph extends Component {
  getData() {
    const { affinities, indexToName, nameToIndex, getSign } = this.props.zodiac,
      name = this.props.birthdate ? getSign(this.props.birthdate) : "aries";

    return affinities[nameToIndex[name]].map((value, index) => {
      return { axis: indexToName[index], value };
    });
  }

  renderGraph() {
    const margin = { top: 100, right: 75, bottom: 100, left: 60 },
      width =
        Math.min(400, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      ),
      color = scale.ordinal().range(["#EDC951", "#CC333F", "#00A0B0"]),
      radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 5,
        levels: 10,
        roundStrokes: false,
        color: color
      };

    RadarChart(".radarChart", [this.getData()], radarChartOptions);
  }

  componentDidMount() {
    this.renderGraph();
  }
  componentDidUpdate() {
    // need to add "prev props" check
    this.renderGraph();
  }

  render() {
    return <div className="radarChart center-align" />;
  }
}

export default Graph;
