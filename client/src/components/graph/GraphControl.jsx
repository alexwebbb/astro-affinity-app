import React, { Component } from "react";
import { connect } from "react-redux";
import * as M from "materialize-css";
import ZODIAC, { WESTERN } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import Graph from "./Graph";
import Buttons from "./GraphButtons";
import GraphSpinner from "./GraphSpinner";

class GraphControl extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, currentZodiac: WESTERN };
    this.setZodiac = this.setZodiac.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  setZodiac(zodiac) {
    this.setState({ currentZodiac: zodiac });
  }

  updateWindowDimensions() {
    // returns the view to the top so pushpinned graph will resize properly
    window.scrollTo(0, 0);
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate() {
    // logic for pushpin, so that it doesnt run on med and below
    if (window.pushpinInstances && this.state.width < 992) {
      window.pushpinInstances.forEach(element => {
        element.destroy();
      });
    } else if (this.state.width >= 992) {
      const elems = document.querySelectorAll(".pushpin");
      window.pushpinInstances = M.Pushpin.init(elems, { top: 44 }); // true offset is 74px
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

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
          return COLORS.SELECTED_BUTTON;
        }
      },
      pushpinActive = true ? "pushpin" : "";

    return (
      <div className={"graph-control " + pushpinActive}>
        <div className={"card " + COLORS.GRAPH_BACKGROUND}>
          <div className={"card-content center-align " + COLORS.TITLE1}>
            {this.renderGraph()}
            <p className="flow-text">
              Graph of the different affinities <br /> with the sign of the
              person selected.
            </p>
          </div>
          <Buttons setZodiac={this.setZodiac} isActive={isActive} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profiles, selected }) => {
  let date = null,
    profile;

  if (profiles) {
    profile = profiles.find(v => {
      return v._id === selected;
    });
  }

  if (profile) {
    date = profile["birthdate"];
  }

  return {
    birthdate: date
  };
};

export default connect(mapStateToProps)(GraphControl);
