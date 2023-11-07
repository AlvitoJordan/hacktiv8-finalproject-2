import { Provider } from "react-redux";
import Router from "./router";
import store from "./redux/store";
import React from "react";
import { NavBar } from "./components/organisms"
import { Footer} from "./components/molecules";


function App() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Router />
        <Footer copyright="© 2023 Hacktiv8 . All Rights Reserved" text="MSIB Kampus Merdeka" />
      </Provider>
    </div>
  );
}

export default App;
