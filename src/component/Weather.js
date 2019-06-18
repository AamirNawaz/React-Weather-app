import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul>
          {this.props.city && this.props.country && (
            <li>
              {" "}
              {this.props.city} ,{this.props.country}
            </li>
          )}

          {this.props.temperature && (
            <li>Temperature:{this.props.temperature}</li>
          )}
          {this.props.humidity && <li>Humidity:{this.props.humidity}</li>}
          {this.props.description && (
            <li>Description:{this.props.description}</li>
          )}
          {this.props.error && <p>{this.props.error}</p>}
        </ul>
      </div>
    );
  }
}

export default Weather;
