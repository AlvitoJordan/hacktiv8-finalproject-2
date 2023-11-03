import { Provider } from "react-redux";
import Router from "./router";
import store from "./redux/store";
import React from "react";
import { NavBar } from "./components/organisms"

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Router />
      </Provider>
    </>
  );
}

export default App;