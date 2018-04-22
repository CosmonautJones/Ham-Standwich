import { Container, Button, Checkbox } from 'semantic-ui-react';

import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const w_id = '5ada4e11ee311e4894b9faae';

class Billing extends Component {
  onToken = token => {
    axios.post('http://localhost:3031/stripe', { w_id, token }).then(res => {
      alert('Payment Successful');
    });
  };

  // onToken = token => {
  //   fetch ('/stripe', {
  //     method: 'POST',
  //     body: JSON.stringify (token),
  //   }).then (res => {
  //     alert ('Payment Successful');
  //   });
  // };

  render() {
    return (
      <Container>
        <StripeCheckout
          name="Hey Team"
          description="30 Day Subscription - $9.99"
          amount={999}
          token={this.onToken}
          stripeKey="pk_test_mSszCkbADb0iAmuW6u0dWhcw"
        >
          <Checkbox
            className="checkbox"
            label="30 Day Subscription - $9.99"
            ripple
          />
          <Button raised colored>
            {' '}
            Buy Now{' '}
          </Button>
        </StripeCheckout>
      </Container>
    );
  }
}

export default Billing;
