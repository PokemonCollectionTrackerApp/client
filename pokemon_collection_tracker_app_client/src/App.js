import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
