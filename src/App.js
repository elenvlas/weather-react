import WeatherSearch from './WeatherSearch';
import Header from './Header';

import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
      <br />
      <h1 className="title-city">Lisbon</h1>
      <div></div>
      <div>Clouds</div>

      <div className="text-center">
        <div className="row">
          <div className="col-auto col-icon">
            <i className="fa-solid fa-cloud-sun"></i>
          </div>
          <div className="col-auto">
            <span className="temperature">24</span>
            <a href="#" className="degree celsius">°С<span> |</span></a>
            <a href="#" className="degree fahrenheit">°F</a>
          </div>
          <div className="col-5 col-options">
            <div className="row-2">
              <div className="row-option">
                Humidity: <span>53</span>%
              </div>
              <div className="row-option">Wind: <span>12</span>km/h</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-2 col-card">
          <div className="card card-border">
            <div className="card-body">
              <p className="card-day">Tue</p>
              <i className="fa-solid fa-sun card-icon"></i>
              <p className="card-tempr">25°</p>
            </div>
          </div>
        </div>
        <div className="col-2 col-card">
          <div className="card card-border">
            <div className="card-body">
              <p className="card-day">Wed</p>
              <i className="fa-solid fa-cloud card-icon"></i>
              <p className="card-tempr">25°</p>
            </div>
          </div>
        </div>
        <div className="col-2 col-card">
          <div className="card card-border">
            <div className="card-body">
              <p className="card-day">Thu</p>
              <i className="fa-solid fa-sun card-icon"></i>
              <p className="card-tempr">27°</p>
            </div>
          </div>
        </div>
        <div className="col-2 col-card">
          <div className="card card-border">
            <div className="card-body">
              <p className="card-day">Fri</p>
              <i className="fa-solid fa-cloud card-icon"></i>
              <p className="card-tempr">25°</p>
            </div>
          </div>
        </div>
        <div className="col-2 col-card">
          <div className="card card-border">
            <div className="card-body">
              <p className="card-day">Sat</p>
              <i className="fa-solid fa-cloud-showers-heavy card-icon"></i>
              <p className="card-tempr">23°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
