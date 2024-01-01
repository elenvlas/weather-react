import WeatherSearch from './WeatherSearch';
import Header from './Header';
import Forecast from './Forecast';
import Footer from './Footer';

import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
