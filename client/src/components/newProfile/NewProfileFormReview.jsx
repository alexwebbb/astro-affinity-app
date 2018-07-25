import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as COLORS from "../../config/colors";
import * as actions from "../../actions";

const ProfileFormReview = ({
  onCancel,
  formValues,
  submitProfile,
  history,
  credits
}) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  }),
  renderSaveButton = () => {
    if(credits) {
      return (
        <button
        onClick={() => submitProfile(formValues, history)}
        className="green btn-flat right white-text"
      >
        Save Profile
        <i className="material-icons right">save</i>
      </button>
      );
    } else {
      return (
        <button
        className={"btn-flat right white-text " + COLORS.ACCENT5}
      >
        No More Slots
        <i className="material-icons right">warning</i>
      </button>
      );
    }
  };



  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className={"white-text btn-flat " + COLORS.YELLOW2}
        onClick={onCancel}
      >
        Back
      </button>
      {renderSaveButton()}
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.profileForm.values, credits: state.auth.credits };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ProfileFormReview));
