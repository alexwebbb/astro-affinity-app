import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as M from "materialize-css";
import * as actions from "../actions";

class Payments extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".tooltipped");
    document.tooltipInstances = M.Tooltip.init(elems);
  }

  render() {
    return (
      <StripeCheckout
        name="Astro App"
        description="$1 for 1 slot"
        amount={100}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        panelLabel="Buy one slot for"
      >
        <span
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Payment info is 4242 4242 4242 4242, 04/24, 242"
        >
          <button className="btn">Add Slots</button>
        </span>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
