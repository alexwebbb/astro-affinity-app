import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import * as M from "materialize-css";
import * as COLORS from "../../config/colors";
import CELEBRITIES from "../../utils/celebrities"
import ProfileField from "./NewProfileField";
import formFields from "./formFields";

class ProfileForm extends Component {
  autofillEntries() {
    const celeb = CELEBRITIES[Math.floor(Math.random() * CELEBRITIES.length)],
    elem = document.getElementById("textarea1");

    this.props.autofill("name", celeb.name);
    this.props.autofill("birthdate", celeb.birthdate);
    this.props.autofill("description", celeb.description);
    M.textareaAutoResize(elem);
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
        <div className="center-align group">
          <Link
            to="/affinities"
            className={
              "left btn-flat new-profile__button white-text " + COLORS.ACCENT5
            }
          >
            Cancel
          </Link>
          <a
            className={
              "waves-effect waves-light btn-flat new-profile__button " + COLORS.YELLOW1
            }
            onClick={() => this.autofillEntries()}
          >
            <i className="material-icons left">cloud</i>Autofill
          </a>
          <button
            type="submit"
            className={"right btn-flat new-profile__button white-text " + COLORS.TEAL1}
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </div>
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
