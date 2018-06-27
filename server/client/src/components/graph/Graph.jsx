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

  renderGraph(parentWidth) {
    const labelFactorAdjusted =
        1.24 + (0.5 - 0.5 * (Math.min(parentWidth - 330, 194) / 194)),
      margin = { top: 75, right: 75, bottom: 75, left: 75 },
      width = parentWidth - margin.left - margin.right,
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
        color: color,
        labelFactor: labelFactorAdjusted
      };

    RadarChart(".radarChart", [this.getData()], radarChartOptions);
  }

  componentDidMount() {
    this.renderGraph(this.refs.child.parentNode.clientWidth);
  }
  componentDidUpdate() {
    console.log(this.props.selector);
    // need to add "prev props" check
    this.renderGraph(this.refs.child.parentNode.clientWidth);
  }
  render() {
    return <div ref="child" className={this.props.selector} />;
  }
}

export default Graph;
