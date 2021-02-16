import React from "react";
import ReactDom from "react-dom";

//Redux
import reducers from "./reducers";
import { Provider } from "react-redux";
import reduxThunk from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";

const store = createStore(
  reducers, //Reducers
  {}, //Estado inicial
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
