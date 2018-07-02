import React, { Component } from "react";
import * as d3 from "d3";
import { RadarChart } from "../../utils/radarChart/radarChart";

class Graph extends Component {
  getData() {
    const { affinities, indexToName, nameToIndex, getSign } = this.props.zodiac,
      name = getSign(this.props.birthdate);

    return {
      name,
      axes: affinities[nameToIndex[name]].map((value, index) => {
        return { axis: indexToName[index], value };
      })
    };
  }

  renderGraph(parentWidth) {
    const labelFactorAdjusted =
        1.24 + (0.13 - 0.13 * (Math.min(parentWidth - 330, 194) / 194)),
      margin = { top: 75, right: 75, bottom: 75, left: 75 },
      width = parentWidth - margin.left - margin.right,
      height = Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      ),
      radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 5,
        levels: 10,
        roundStrokes: false,
        color: d3.scaleOrdinal().range(["#AFC52F", "#ff6600"]),
        format: ".1f",
        legend: { title: this.props.title, translateX: 100, translateY: 10 },
        labelFactor: labelFactorAdjusted
      };

    RadarChart(".radarChart", [this.getData()], radarChartOptions);
  }

  componentDidMount() {
    this.renderGraph(this.refs.child.parentNode.clientWidth);
  }
  componentDidUpdate() {
    this.renderGraph(this.refs.child.parentNode.clientWidth);
  }
  render() {
    return <div ref="child" className={this.props.selector} />;
  }
}

export default Graph;
