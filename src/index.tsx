import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import { cowsnbulls } from "./reducers/index";

import { Provider } from "react-redux";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { StoreState } from "./types";

const initialState: StoreState = {
  username: "",
  numbers: [],
  isUsernameSaved: false,
  userGuess: undefined,
  allGuesses: [],
  isGameFinished: false,
  errorMessage: "",
  numberInputValue: ""
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  cowsnbulls,
  initialState,
  composeWithDevTools(applyMiddleware())
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
