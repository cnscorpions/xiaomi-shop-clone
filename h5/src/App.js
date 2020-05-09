import React from "react";
import { Provider } from "react-redux";
import { store } from "store/index";

import AppRouter from "router/AppRouter";
import "./styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
