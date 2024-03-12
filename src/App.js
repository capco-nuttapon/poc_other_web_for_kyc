import logo from "./logo_capco.png";
import "./App.css";
import "./tailwind.css";

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

function App() {
  function onKYCClicked() {
    if (getMobileOperatingSystem() === "Android") {
      if (window.kyc !== undefined) {
        window.kyc.onKYCClicked("");
      }
    } else if (getMobileOperatingSystem() === "iOS") {
      if (window.webkit !== undefined) {
        window.webkit.messageHandlers.onKYCClicked.postMessage("");
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mb-24" alt="logo" />
        <p className="text-black">Capco Web app</p>
        <button className="App-link" onClick={onKYCClicked}>
          Go to KYC
        </button>
      </header>
    </div>
  );
}

export default App;
