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
      if (credits) {
        return (
          <button
            onClick={() => submitProfile(formValues, history)}
            className={"btn-flat right white-text new-profile__button " + COLORS.SAVE_BUTTON}
          >
            Save Profile
            <i className="material-icons right">save</i>
          </button>
        );
      } else {
        return (
          <button className={"btn-flat right white-text new-profile__button " + COLORS.PRIMARY_RED}>
            No More Slots
            <i className="material-icons right">warning</i>
          </button>
        );
      }
    };

  return (
    <div>
      <h1 className="center">Please confirm your entries</h1>
      {reviewFields}
      <div className="group">
        <button
          className={"white-text btn-flat new-profile__button " + COLORS.BACK_BUTTON}
          onClick={onCancel}
        >
          Back
        </button>
        {renderSaveButton()}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.profileForm.values,
    credits: state.auth.credits
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ProfileFormReview));
