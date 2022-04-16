import logo from './logo.svg';
import './App.css';
import Fade from 'react-reveal/Fade';
function App() {
  return (
    <div className="App">
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
      <footer>
        <Fade bottom>
          <h1>React Reveal</h1>
        </Fade>
      </footer>
    </div>
  );
}

export default App;
