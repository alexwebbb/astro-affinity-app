import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import { Link } from "react-router-dom";
import ProfileField from "./ProfileField";
import formFields from "./formFields";
import moment from "moment";
import momentLocaliser from "react-widgets-moment";

import "react-widgets/dist/css/react-widgets.css";

momentLocaliser(moment);

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
  <DateTimePicker
    onChange={value => onChange(value)}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? new Date("01 01 1990") : new Date(value)}
  />
);

class ProfileForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, fieldType }) => {
      if (fieldType === "date") {
        return (
          <Field
            key={name}
            name="dob"
            type="date"
            showTime={false}
            component={renderDateTimePicker}
          />
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
