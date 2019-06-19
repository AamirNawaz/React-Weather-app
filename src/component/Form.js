import React, { Component } from "react";
import Titles from "./Titles";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          {this.props.error && (
            <div className="col-md-5">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error!</h4>
                {this.props.error}
              </div>
            </div>
          )}
          <div className="form-row">
            <div className="col-2" />
            <div className="form-group col-md-3">
              <label>City</label>
              <input
                name="city"
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter City Name"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Country</label>
              <input
                name="country"
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Enter Your Country Name"
              />
            </div>

            <button type="submit" className="btn btn-primary mb-2">
              See Weather
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
