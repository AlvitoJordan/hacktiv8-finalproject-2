import { Provider } from "react-redux";
import Router from "./router";
import store from "./redux/store";
import React from "react";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
