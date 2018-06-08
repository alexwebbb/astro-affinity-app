import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import { Link } from "react-router-dom";
import ProfileField from "./ProfileField";
import formFields from "./formFields";

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
);

class ProfileForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, fieldType }) => {
      if (fieldType === "date") {
        return (
          <div>
            <label>DOB</label>
            <Field
              name="dob"
              showTime={false}
              component={renderDateTimePicker}
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
  form: "ProfileForm",
  destroyOnUnmount: false
})(ProfileForm);
