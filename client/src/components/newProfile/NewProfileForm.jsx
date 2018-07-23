import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import * as COLORS from "../../config/colors";
import ProfileField from "./NewProfileField";
import formFields from "./formFields";

class ProfileForm extends Component {
  autofillEntries() {
    this.props.autofill("name","hello");
  }

  renderFields() {
    return formFields.map(({ label, name, fieldType }) => {
      return (
        <Field
          key={name}
          component={ProfileField}
          type={fieldType}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    // this.autofillEntries();
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onProfileSubmit)}>
        {this.renderFields()}
        <Link to="/affinities" className={"btn-flat new-profile__cancel-button white-text " + COLORS.ACCENT5}>
          Cancel
        </Link>
        <a className={"col waves-effect waves-light btn-flat center " + COLORS.YELLOW1}>
          <i className="material-icons left">cloud</i>Autofill
        </a>
        <button type="submit" className={"btn-flat right white-text " + COLORS.TEAL1}>
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "profileForm",
  destroyOnUnmount: false
})(ProfileForm);
