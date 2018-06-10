import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ProfileFormReview = ({ onCancel, formValues, submitProfile, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    console.log(formValues.dob.getFullYear());

    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {(formValues[name] != null ? formValues[name] : formValues.dob.getFullYear())}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitProfile(formValues, history)}
        className="green btn-flat right white-text"
      >
        Save Profile
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state.form);
  return { formValues: state.form.profileForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ProfileFormReview));
