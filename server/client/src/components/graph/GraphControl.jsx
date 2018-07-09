import React, { Component } from "react";
import { connect } from "react-redux";

import * as COLORS from "../../config/colors";

import Graph from "./Graph";

import * as chineseZodiac from "../../utils/chineseZodiac";
import * as westernZodiac from "../../utils/westernZodiac";

import { Spinner } from "../../utils/materialize-widgets";

const CHINESE = "chineseZodiac",
  WESTERN = "westernZodiac";

class GraphControl extends Component {
  state = { currentZodiac: WESTERN };

  renderGraph() {
    if (this.state.currentZodiac === CHINESE) {
      return (
        <div className="card-title">
          Comparing to{" "}
          <span className="graph__active-sign">
            {chineseZodiac.getSign(this.props.birthdate)}
          </span>
          <Graph
            birthdate={this.props.birthdate}
            zodiac={chineseZodiac}
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
            {westernZodiac.getSign(this.props.birthdate)}
          </span>
          <Graph
            birthdate={this.props.birthdate}
            zodiac={westernZodiac}
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
          <div className={"card " + COLORS.SECONDARY}>
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
                    className="waves-effect waves-light btn"
                    onClick={() => this.setState({ currentZodiac: WESTERN })}
                  >
                    Western
                  </a>
                </div>
                <div className="col s4 offset-s2">
                  <a
                    className="waves-effect waves-light btn"
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
      return (
        // loading spinner
        <div>
          <div className="card">
            <div
              className="card-content white-text valign-wrapper"
              style={{ height: "500px", paddingLeft: "40%" }}
            >
              <Spinner />
              <div className="center-align" />
            </div>
          </div>
        </div>
      );
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

export default connect(mapStateToProps)(GraphControl);
