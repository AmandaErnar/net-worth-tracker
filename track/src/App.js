import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, world!
        </p>
        <a
          className="App-link"
          href="https://github.com/aalchemize"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
      <p>
        footer here
      </p>
    </div>
  );
}

export default App;
