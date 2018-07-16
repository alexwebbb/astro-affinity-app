import React, { Component } from "react";
import { connect } from "react-redux";
import ZODIAC, { CHINESE, WESTERN } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import Graph from "./Graph";
import GraphSpinner from "./GraphSpinner";

class GraphControl extends Component {
  state = { currentZodiac: WESTERN };

  renderGraph() {
    const { currentZodiac } = this.state,
      { birthdate } = this.props;
    return (
      <div className="card-title">
        Comparing to{" "}
        <span className="graph__active-sign">
          {ZODIAC[currentZodiac].getSign(birthdate)}
        </span>
        <Graph
          birthdate={birthdate}
          zodiac={ZODIAC[currentZodiac]}
          selector="radarChart"
          title={ZODIAC[currentZodiac].name}
        />
      </div>
    );
  }

  render() {
    if (!this.props.birthdate) {
      return <GraphSpinner />;
    }

    const isActive = zodiac => {
      if (this.state.currentZodiac === zodiac) {
        return COLORS.ACCENT3;
      }
    };

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
                  className={
                    "waves-effect waves-light btn-large " + isActive(WESTERN)
                  }
                  onClick={() => this.setState({ currentZodiac: WESTERN })}
                >
                  Western
                </a>
              </div>
              <div className="col s4 offset-s2">
                <a
                  className={
                    "waves-effect waves-light btn-large " + isActive(CHINESE)
                  }
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
