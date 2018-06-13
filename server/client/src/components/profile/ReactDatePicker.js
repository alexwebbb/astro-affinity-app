import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ReactDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      selectedDate: date
    })
  }

  render() {
    console.log(this.props);
    return (
      <DatePicker
        selected={this.state.selectedDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default ReactDatePicker;
