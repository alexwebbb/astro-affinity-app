import React, { Component } from "react";
import { reduxForm } from "redux-form";
import * as COLORS from "./../../config/colors";
import ProfileForm from "./NewProfileForm";
import ProfileFormReview from "./NewProfileFormReview";

const classes = "new-profile " + COLORS.FORM_BACKGROUND;

class NewProfile extends Component {
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
  form: "profileForm"
})(NewProfile);
