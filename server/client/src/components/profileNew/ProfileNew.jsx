import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ProfileForm from "./ProfileForm";
import ProfileFormReview from "./ProfileFormReview";

const classes = "light-blue lighten-5 profile-form-css";

class ProfileNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <div className={classes}>
          <ProfileFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        </div>
      );
    }

    return (
      <div className={classes}>
        <ProfileForm
          onProfileSubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "ProfileForm"
})(ProfileNew);
