import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "392fecb7049a8a39ff68de93bcb7e6a7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-5 col-change">
        <input type="search" placeholder="Enter a city.." onChange={updateCity} className="form-control" /></div>
      <div className="col-auto col-change"><button type="submit" className="btn btn-primary mb-3">Search</button></div>
      <div className="col-auto"><button type="submit" className="btn btn-success mb-3">Current
      </button></div>     
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <br />
        <h1 className="title-city">{weather.city}</h1>
        <WeatherData />
        <div>{weather.description}</div>

        <div className="text-center">
          <div className="row">
            <div className="col-auto col-icon">
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="col-auto">
              <span className="temperature">{Math.round(weather.temperature)}</span>
              <span className="degree celsius">°С</span>
            </div>
            <div className="col-5 col-options">
              <ul className="row-2">
                <li className="row-option">
                  Humidity: <span>{weather.humidity}</span>%
                </li>
                <li className="row-option">Wind: <span>{Math.round(weather.wind)}</span> km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <br />
          <h1 className="title-city">Lisbon</h1>
          <WeatherData />
          <div>Clouds</div>

          <div className="text-center">
            <div className="row">
              <div className="col-auto col-icon">
                <i className="fa-solid fa-cloud-sun"></i>
              </div>
              <div className="col-auto">
                <span className="temperature">24</span>
                <span className="degree celsius">°С</span>
              </div>
              <div className="col-5 col-options">
                <ul className="row-2">
                  <li className="row-option">
                    Humidity: <span>53</span>%
                  </li>
                  <li className="row-option">Wind: <span>12</span>km/h</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
