import React, { Component } from "react";

class Weather extends Component {
  state = {};

  render() {
    let bgStyle = {
      background: "#435e8d",
      border: "1px solid #879ffe",
      color: "white"
    };
    if (this.props.ResultSection === true) {
      var styleDisplay = {
        display: "block"
      };
    } else {
      var styleDisplay = {
        display: "none"
      };
    }

    return (
      <div>
        <div className="container" style={styleDisplay}>
          <div className="col-md-4 offset-md-5">
            {this.props.city && (
              <h2>
                {this.props.city},{this.props.country}
              </h2>
            )}
            {this.props.city && (
              <img
                src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
                height="70px"
                width="60px"
              />
            )}
            <span>{this.props.description}</span>
            {this.props.city && <h3>{this.props.temperature} ° C</h3>}
          </div>

          <div className="list-group ">
            <div className="row">
              <ul className=" col-md-4 offset-md-2">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  Temperature:{" "}
                  {this.props.F && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.F} F
                    </span>
                  )}
                </li>

                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  Humidity:
                  {this.props.humidity && (
                    <span className="badge badge-primary badge-pill">
                      {" "}
                      {this.props.humidity}
                    </span>
                  )}
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  Description:
                  {this.props.description && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.description}
                    </span>
                  )}
                </li>

                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  Pressure:
                  {this.props.pressure && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.pressure}
                    </span>
                  )}
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  visibility:
                  {this.props.visibility && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.visibility}
                    </span>
                  )}
                </li>
              </ul>
              <ul className=" col-md-4 ">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  WindSpeed:
                  {this.props.windspeed && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.windspeed} Km/h
                    </span>
                  )}
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  Wind Degree:
                  {this.props.windDegree && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.windDegree} °
                    </span>
                  )}
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  SunRise:
                  {this.props.sunrise && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.sunrise}
                    </span>
                  )}
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  Sunset:
                  {this.props.sunset && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.sunset}
                    </span>
                  )}
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={bgStyle}
                >
                  clouds:
                  {this.props.clouds && (
                    <span className="badge badge-primary badge-pill">
                      {this.props.clouds}
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
