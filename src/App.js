import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Weather from "./components/weather/Weather";
import Search from "./components/weather/Search";
import "weather-icons/css/weather-icons.css";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    description: "",
    temp: null,
    city: "",
    icon: undefined,
    loading: false,
    alert: null,
  };

  searchWeather = async (text) => {
    const apiKey = "d233a8cf49e077d827d0a8f470f7286c";
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`
    );
    const weather = res.data;
    this.setState({
      description: weather.weather[0].description,
      temp: weather.main.temp,
      city: weather.name,
      country: weather.sys.country,
      icon: weather.weather[0].icon,
      loading: false,
    });
  };

  // Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const {
      description,
      city,
      temp,
      country,
      icon,
      loading,
      alert,
    } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Search searchWeather={this.searchWeather} setAlert={this.setAlert} />
          <Weather
            loading={loading}
            icon={icon}
            description={description}
            city={city}
            temp={temp}
            country={country}
          />
        </div>
      </div>
    );
  }
}

export default App;
