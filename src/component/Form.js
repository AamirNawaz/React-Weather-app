import React, { Component } from "react";
import Titles from "./Titles";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <h1>Form</h1>
          <label>Enter City</label>
          <br />
          <input type="text" name="city" placeholder="Enter City" />
          <br />
          <label>Enter Country</label>
          <br />
          <input type="text" name="country" placeholder="Enter country " />
          <br />
          <button type="submit">Search Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
