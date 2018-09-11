import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as M from "materialize-css";

const tapTargetText = [
  {
    title: "Welcome to the Astrological Affinities App!",
    text:
      "The purpose of this app is to compare different people based on their astrological signs. Please click here to create a profile."
  },
  {
    title: "Great Job!",
    text: "Now lets create a second profile which we can compare to the first."
  },
  {
    title: "Almost there!",
    text:
      "Lets make one more profile, so we can have a little competition for our match. With this many profiles, you can't use the sort buttons!"
  },
  {
    title: "Good to go!",
    text:
      "You are now ready to find your perfect match with the aid of the stars. Don't forget to try out the sort buttons at the top."
  }
];

class TapTargetGuide extends Component {
  openTapTargets() {
    const { setNewUserFlag } = this.props,
      elems = document.querySelectorAll(".dashboard .tap-target"),
      { auth, profiles } = this.props,
      taptargetInstances = M.TapTarget.init(elems, {
        onClose: function() {
          if (profiles.length === tapTargetText.length - 1) {
            setNewUserFlag(false);
          }
        }
      });

    if (auth && profiles && auth.newUserFlag) {
      if (taptargetInstances.length > 0) {
        taptargetInstances[0].open();
      }
    }
  }

  componentDidMount() {
    this.openTapTargets();
  }

  componentDidUpdate() {
    this.openTapTargets();
  }
  render() {
    const { profiles } = this.props;
    if (!profiles || profiles.length >= tapTargetText.length) {
      return null;
    }
    const { title, text } = tapTargetText[profiles.length];
    return (
      <div className="tap-target" data-target="newProfile">
        <div className="tap-target-content white-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profiles }) => {
  return { auth, profiles };
};

export default connect(
  mapStateToProps,
  actions
)(TapTargetGuide);
