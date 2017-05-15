import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import App from "./containers/App";
import reducer from "./reducers";

const middleware = [logger];
const store = createStore(reducer, applyMiddleware(...middleware));
const root = document.getElementById("root");

render(
   <Provider store={store}>
      <App />
   </Provider>,
   root
);
