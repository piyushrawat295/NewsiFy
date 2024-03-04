import React, { Component } from 'react';
// import loading from './spinner.gif';

export class Spinner extends Component {
  render() {
    return (
      <div class="loader-container">
        <div class="loader"></div>
        <div class="loader-text">Loading...</div>
      </div>

    );
  }
}

export default Spinner;

