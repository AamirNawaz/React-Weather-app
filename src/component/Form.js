import React, { Component } from "react";
import Titles from "./Titles";

class Form extends Component {
  state = {};

  render() {
    let inputFieldCss = {
      background: "#f443361c",
      border: "1px solid #7d98e9"
    };
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          {this.props.error && (
            <div className="col-md-4 offset-md-3">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error!</h4>
                {this.props.error}
              </div>
            </div>
          )}
          <div className="form-row">
            <div className="col-3" />
            <div className="form-group col-md-3">
              <label>
                <strong>City</strong>
              </label>
              <input
                style={inputFieldCss}
                name="city"
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter City Name"
              />
            </div>
            <div className="form-group col-md-3">
              <label>
                <strong>Country</strong>
              </label>
              <input
                style={inputFieldCss}
                name="country"
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Enter Your Country Name"
              />
            </div>

            <button type="submit" className="btn btn-primary ">
              See Weather
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
