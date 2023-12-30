import Weather from './Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello from React
        </h1>
        <br />
        <Weather city="London" />
      </header>
    </div>
  );
}

export default App;
