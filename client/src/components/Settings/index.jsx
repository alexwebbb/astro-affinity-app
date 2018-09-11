import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import * as COLORS from "../../config/colors";

class Settings extends Component {
  render() {
    return (
      <div className={"settings group " + COLORS.FORM_BACKGROUND}>
        <div className="group">
          <a
            className="waves-effect waves-light btn settings__button right"
            onClick={() => this.props.setNewUserFlag(true, this.props.history)}
          >
            <i className="material-icons left">fast_rewind</i>
            Rewind
          </a>
          <p className="settings__label">
            Click this button to rewind the app as if you were a new user.
            WARNING! This will delete all your profiles. Any credits you
            purchased will remain.
          </p>
        </div>
        <div className="group">
          <a
            className="waves-effect waves-light btn settings__button right"
            onClick={() => this.props.ejectUser(this.props.history)}
          >
            <i className="material-icons right">eject</i>
            Eject
          </a>
          <p className="settings__label">
            Click this button to remove your account from the app altogether. No
            user information will remain, purchase history will be
            unrecoverable.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(Settings));
