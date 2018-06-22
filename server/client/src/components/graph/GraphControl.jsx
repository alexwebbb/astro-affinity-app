import React, { Component } from "react";
import { connect } from "react-redux";
import Graph from "./Graph";

import * as chineseZodiac from "../../utils/chineseZodiac";
import * as westernZodiac from "../../utils/westernZodiac";

import { Spinner } from "../../utils/materialize-widgets";

const CHINESE = "chineseZodiac",
  WESTERN = "westernZodiac";

class GraphControl extends Component {
  state = { currentZodiac: WESTERN };

  componentDidMount() {}

  renderGraph() {
    if (this.state.currentZodiac === CHINESE) {
      return (
        <div>
          <span className="card-title">
            Comparing to {chineseZodiac.getSign(this.props.birthdate)}
          </span>
          <Graph birthdate={this.props.birthdate} zodiac={chineseZodiac} />
        </div>
      );
    } else {
      return (
        <div>
          <span className="card-title">
            Comparing to {westernZodiac.getSign(this.props.birthdate)}
          </span>
          <Graph birthdate={this.props.birthdate} zodiac={westernZodiac} />
        </div>
      );
    }
  }

  render() {
    if (this.props.birthdate) {
      return (
        <div>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              {this.renderGraph()}
              <p>
                Graph of the different affinities with the sign of the person
                selected.
              </p>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s4 offset-s1">
                  <a
                    className="waves-effect waves-light btn"
                    onClick={() => this.setState({ currentZodiac: WESTERN })}
                  >
                    Western
                  </a>
                </div>
                <div className="col s4 offset-s1">
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
