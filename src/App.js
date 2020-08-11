import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    initializeReactGA();
  });

  const initializeReactGA = () => {
    ReactGA.initialize("UA-175208213-1");
    ReactGA.pageview("/homepage");
  };

  const Event = () => {
    console.info("event clicked");
    ReactGA.initialize("UA-175208213-1");
    ReactGA.event({
      category: "User",
      action: "Create an Account",
    });
  };

  const Event2 = () => {
    console.info("event clicked 2");
    ReactGA.initialize("UA-175208213-1");
    ReactGA.event({
      category: "User",
      action: "Create an Account 2",
    });
  };

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
        <button onClick={Event}>Click Event</button>
        <button onClick={Event2}>Click Event 2</button>
      </header>
    </div>
  );
}

export default App;
