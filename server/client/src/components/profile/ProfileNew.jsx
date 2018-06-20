import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ProfileForm from "./ProfileForm";
import ProfileFormReview from "./ProfileFormReview";

class ProfileNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ProfileFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ProfileForm
        onProfileSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "ProfileForm"
})(ProfileNew);
