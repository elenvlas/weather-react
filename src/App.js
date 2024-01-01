import WeatherSearch from './WeatherSearch';
import Header from './Header';
import Forecast from './Forecast';

import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
      <Forecast />
    </div>
  );
}

export default App;
