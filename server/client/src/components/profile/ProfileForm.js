import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ProfileField from "./ProfileField";
import formFields from "./formFields";
import ReactDatePicker from "./ReactDatePicker";

class ProfileForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, fieldType }) => {
      if (fieldType === "date") {
        return (
          <div>
            <label>DOB</label>
            <Field
              key={name}
              name="dob"
              component={ReactDatePicker}
            />
          </div>
        );
      } else {
        return (
          <Field
            key={name}
            component={ProfileField}
            type="text"
            label={label}
            name={name}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onProfileSubmit)}>
          {this.renderFields()}
          <Link to="/affinities" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
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
