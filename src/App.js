import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Just another web app</p>
        <a
          className="App-link"
          href="https://d966-125-25-38-184.ngrok-free.app/?isPush=true"
        >
          Push to KYC
        </a>
      </header>
    </div>
  );
}

export default App;
