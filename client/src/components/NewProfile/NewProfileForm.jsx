import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import * as M from "materialize-css";
import * as COLORS from "../../config/colors";
import CELEBRITIES from "../../utils/celebrities"
import ProfileField from "./NewProfileField";
import formFields from "./formFields";
import link from "./../../utils/externalLink.jsx";

class ProfileForm extends Component {
  async autofillEntries() {
    const celeb = CELEBRITIES[Math.floor(Math.random() * CELEBRITIES.length)],
    elem = document.getElementById("textarea1");

    await this.props.autofill("name", celeb.name);
    await this.props.autofill("birthdate", celeb.birthdate);
    await this.props.autofill("description", celeb.description);

    elem.focus();
    elem.dispatchEvent(new Event('change'));
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
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onProfileSubmit)}>
        {this.renderFields()}
        <div className="center-align group">
          <Link
            to="/affinities"
            className={
              "left btn-flat new-profile__button white-text " + COLORS.PRIMARY_RED
            }
          >
            Cancel
          </Link>
          <a
            className={
              "waves-effect waves-light btn-flat new-profile__button " + COLORS.AUTOFILL_BUTTON
            }
            onClick={() => this.autofillEntries()}
          >
            <i className="material-icons left">face</i>Autofill
          </a>
          <button
            type="submit"
            className={"right btn-flat new-profile__button white-text " + COLORS.NEXT_BUTTON}
          >
            Next
            <i className="material-icons right">done</i>
          </button>
          <p>
              Celebrity info and copy used in autofill button is sourced from{" "}
              {link("Famous Birthdays", "famousbirthdays.com")}.
            </p>
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
