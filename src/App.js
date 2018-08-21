import React, { Component } from 'react';
import Checkout from './Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React / Stripe Demo</h2>
        </div>
        <p className="App-intro">
          <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={1}
          />
        </p>
      </div>
    );
  }
}

export default App;
