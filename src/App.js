import React from "react";

import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather";

const API_KEY = "6c6f96bccd934ef9358065c8ab36fce2";

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };
  getWeather = async event => {
    event.preventDefault();

    const cityName = event.target.elements.city.value;
    const countryName = event.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&APPID=${API_KEY}`
    );

    const data = await api_call.json();

    if (cityName && countryName) {
      //set state
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
      console.log(data);
    } else {
      //if error setState all to null and put error message
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter City and Country Name"
      });
    }
  };

  render() {
    http: return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
