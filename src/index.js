import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-DWRG7G8R03";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
