
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import App from "./view/App";
import { StateManager } from "./stateManager/stateManager";
import GlobalStyles from "./styles/reset.styles"
const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <StateManager>
      <App />
    </StateManager>
    <GlobalStyles />
  </>,
  rootElement
);