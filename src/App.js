import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather";
var moment = require("moment");
const kelvinToFahrenheit = require("kelvin-to-fahrenheit");
var fahrenheitToCelsius = require("fahrenheit-to-celsius");

const API_KEY = "6c6f96bccd934ef9358065c8ab36fce2";

class App extends React.Component {
  state = {
    temperature: "",
    F: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    icon: "",
    windspeed: "",
    windDegree: "",
    clouds: "",
    pressure: "",
    sunrise: "",
    sunset: "",
    error: "",
    visibility: "",
    ResultSection: false
  };
  getWeather = async event => {
    event.preventDefault();

    const cityName = event.target.elements.city.value;
    const countryName = event.target.elements.country.value;

    if (cityName !== "" && countryName !== "") {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&APPID=${API_KEY}`
      );
      const data = await api_call.json();
      var sunriseConverted = moment(data.sys.sunrise).format("HH:mm:ss");

      var sunsetConverted = moment(data.sys.sunset).format("HH:mm:ss");

      var temp = kelvinToFahrenheit(data.main.temp);
      var Celsius = fahrenheitToCelsius(temp);
      //set state
      this.setState({
        temperature: Celsius,
        F: temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windspeed: data.wind.speed,
        windDegree: data.wind.deg,
        clouds: data.clouds.all,
        pressure: data.main.pressure,
        sunrise: sunriseConverted,
        sunset: sunsetConverted,
        error: "",
        visibility: data.visibility,
        ResultSection: true
      });
      console.log(data);
    } else {
      //if error setState all to null and put error message
      this.setState({
        temperature: "",
        F: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        icon: "",
        windspeed: "",
        windDegree: "",
        clouds: "",
        pressure: "",
        sunrise: "",
        sunset: "",
        visibility: "",
        error: "Please Enter City and Country Name",
        ResultSection: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} error={this.state.error} />

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          windspeed={this.state.windspeed}
          windDegree={this.state.windDegree}
          clouds={this.state.clouds}
          pressure={this.state.pressure}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
          ResultSection={this.state.ResultSection}
          visibility={this.state.visibility}
          F={this.state.F}
        />
      </div>
    );
  }
}

export default App;
