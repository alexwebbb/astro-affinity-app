import React, { Component } from "react";
import { connect } from "react-redux";
import * as COLORS from "../../config/colors";
import Graph from "./Graph";
import GraphSpinner from "./GraphSpinner";
import ZODIAC, { WESTERN, CHINESE } from "./zodiacDefinitions";

class GraphSummary extends Component {
  state = { currentZodiac: WESTERN };

  renderGraph() {
    if (this.state.currentZodiac === CHINESE) {
      return (
        <div className="card-title">
          Comparing to{" "}
          <span className="graph__active-sign">
            {ZODIAC[CHINESE].getSign(this.props.birthdate)}
          </span>
          <Graph
            birthdate={this.props.birthdate}
            zodiac={ZODIAC[CHINESE]}
            selector="radarChart"
            title="Chinese Zodiac"
          />
        </div>
      );
    } else {
      return (
        <div className="card-title">
          Comparing to{" "}
          <span className="graph__active-sign">
            {ZODIAC[WESTERN].getSign(this.props.birthdate)}
          </span>
          <Graph
            birthdate={this.props.birthdate}
            zodiac={ZODIAC[WESTERN]}
            selector="radarChart"
            title="Western Zodiac"
          />
        </div>
      );
    }
  }

  render() {
    if (this.props.birthdate) {
      return (
        <div>
          <div className={"card " + COLORS.GRAPH_BACKGROUND}>
            <div className={"card-content center-align " + COLORS.TITLE}>
              {this.renderGraph()}
              <p className="flow-text">
                Graph of the different affinities with the sign of the person
                selected.
              </p>
            </div>
            <div className="card-action center-align">
              <div className="row center-align">
                <div className="col s4 offset-s1">
                  <a
                    className="waves-effect waves-light btn-large"
                    onClick={() => this.setState({ currentZodiac: WESTERN })}
                  >
                    Western
                  </a>
                </div>
                <div className="col s4 offset-s2">
                  <a
                    className="waves-effect waves-light btn-large"
                    onClick={() => this.setState({ currentZodiac: CHINESE })}
                  >
                    Chinese
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <GraphSpinner />;
    }
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

export default connect(mapStateToProps)(GraphSummary);
