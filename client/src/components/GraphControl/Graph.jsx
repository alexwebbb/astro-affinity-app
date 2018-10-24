import React, { Component } from "react";
import { scaleOrdinal } from "d3";
import RadarChart from "../../utils/radarChart";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

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

  updateWindowDimensions() {
    this.setState({ width: this.refs.child.parentNode.clientWidth });
  }

  renderGraph(parentWidth) {
    const labelFactorAdjusted =
        1.2 + (0.13 - 0.13 * (Math.min(parentWidth - 330, 194) / 194)),
      margin = { top: 75, right: 75, bottom: 60, left: 75 },
      width = Math.abs(parentWidth - margin.left - margin.right),
      height = Math.abs(Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      )),
      radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 5,
        levels: 10,
        roundStrokes: false,
        color: scaleOrdinal().range(["#651fff", "#ff6600"]),
        format: ".1f",
        legend: { title: this.props.title, translateX: 100, translateY: 10 },
        labelFactor: labelFactorAdjusted
      };

    RadarChart(".radarChart", [this.getData()], radarChartOptions);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.renderGraph(this.state.width);
  }

  componentDidUpdate() {
    this.renderGraph(this.state.width);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return <div ref="child" className={this.props.selector} />;
  }
}

export default Graph;
