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
    if (this.pushpinInstances && this.state.width < 992) {
      this.pushpinInstances.forEach(element => {
        element.destroy();
      });
    } else if (this.state.width >= 992) {
      const elems = document.querySelectorAll(".graph-control .pushpin");
      this.pushpinInstances = M.Pushpin.init(elems, { top: 44 }); // true offset is 74px
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  renderGraph() {
    const { currentZodiac } = this.state,
      { name, birthdate } = this.props;
    return (
      <div className="card-title">
        <h1 style={{ fontSize: "0.6em", margin: "0px"}}>
          Currently Selected: <br /><span className="graph__active-sign">{name}</span>
        </h1>
        <h2 style={{ fontSize: "1.4em", margin: "0px" }}>
          Comparing to{" "}
          <span className="graph__active-sign">
            {ZODIAC[currentZodiac].getSign(birthdate)}
          </span>
        </h2>
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
      <div className={"graph-control"}>
        <div className={["card", COLORS.GRAPH_BACKGROUND, pushpinActive].join(" ")}>
          <div className={"card-content center-align " + COLORS.TITLE1}>
            {this.renderGraph()}
            <p style={{ margin: "0px"}}>
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
    name = "",
    profile;

  if (profiles) {
    profile = profiles.find(v => {
      return v._id === selected;
    });
  }

  if (profile) {
    name = profile["name"];
    date = profile["birthdate"];
  }

  return {
    name,
    birthdate: date
  };
};

export default connect(mapStateToProps)(GraphControl);
