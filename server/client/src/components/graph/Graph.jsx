import React, { Component } from "react";
import { scale } from "d3";
import { connect } from "react-redux";
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
    if (this.props.birthdate) {
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
          maxValue: 0.5,
          levels: 5,
          roundStrokes: false,
          color: color
        };

      RadarChart(".radarChart", [this.getData()], radarChartOptions);
    }
  }

  componentDidMount() {
    this.renderGraph();
  }
  componentDidUpdate() {
    this.renderGraph();
  }

  render() {
    return (
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              Comparing to {this.props.zodiac.getSign(this.props.birthdate)}
            </span>
            <div className="radarChart" />
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="/">This is a link</a>
            <a href="/">This is a link</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profiles, selected }) => {
  let date = null;

  const profile = profiles.find(v => {
    return v._id === selected;
  });

  if (profile) {
    date = profile["birthdate"];
  }

  return {
    birthdate: date
  };
};

export default connect(mapStateToProps)(Graph);
