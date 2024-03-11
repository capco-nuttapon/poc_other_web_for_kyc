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
          href="https://capco-nuttapon.github.io/poc_kyc_web/#/?isPush=true"
        >
          Push to KYC
        </a>
      </header>
    </div>
  );
}

export default App;
