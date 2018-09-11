import React, { Component } from "react";
import { connect } from "react-redux";
import * as M from "materialize-css";
import { WESTERN } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import renderGraph from "./renderGraph";
import Buttons from "./GraphButtons";
import GraphSpinner from "./GraphSpinner";

const TRANSITION_WIDTH = 992;

class GraphControl extends Component {
  constructor(props) {
    super(props);
    this.state = { currentZodiac: WESTERN };
    this.setZodiac = this.setZodiac.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.lastWidth = 0;
  }

  updateWindowDimensions() {
    // logic for pushpin, so that it doesnt run on med and below
    if (this.pushpinInstances && window.innerWidth < TRANSITION_WIDTH) {
      this.pushpinInstances.forEach(element => {
        element.destroy();
      });
    } else if (window.innerWidth >= TRANSITION_WIDTH) {
      const elems = document.querySelectorAll(".graph-control .pushpin");
      // returns the view to the top so pushpinned graph will resize properly
      if (this.lastWidth !== window.innerWidth) {
        window.scrollTo(0, 0);
        this.lastWidth = window.innerWidth;
      }
      this.pushpinInstances = M.Pushpin.init(elems, { top: 44 }); // true offset is 74px
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate() {
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  setZodiac(zodiac) {
    this.setState({ currentZodiac: zodiac });
  }

  render() {
    if (!this.props.birthdate) {
      if (this.props.activeIndex === 0) {
        return (
          <div
            className={
              "card graph-placeholder group center white-text " +
              COLORS.GRAPH_BACKGROUND
            }
          >
            <h1>Lets get started!</h1>
          </div>
        );
      }
      return <GraphSpinner />;
    }

    const isActive = zodiac => {
      if (this.state.currentZodiac === zodiac) {
        return COLORS.SELECTED_BUTTON;
      }
    };

    return (
      <div className={"graph-control"}>
        <div className={["card", COLORS.GRAPH_BACKGROUND, "pushpin"].join(" ")}>
          <div className={"card-content center-align " + COLORS.TITLE1}>
            {renderGraph(this.state, this.props)}
            <p style={{ margin: "0px" }}>
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
    profile,
    activeIndex = null;

  if (profiles) {
    profile = profiles.find(v => {
      return v._id === selected;
    });
    activeIndex = profiles.length;
  }

  if (profile) {
    name = profile["name"];
    date = profile["birthdate"];
  }

  return {
    name,
    birthdate: date,
    activeIndex
  };
};

export default connect(mapStateToProps)(GraphControl);
