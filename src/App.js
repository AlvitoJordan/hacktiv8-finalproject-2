// import { Provider } from "react-redux";
// import Router from "./router";
// import store from "./redux/store";
import React from "react";
import Bukapedia from "./assets/Bukapedia.svg"
import NavBar from "./components/organisms/NavBar";

function App() {
  return (
    // <NavBar />
    <div className="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4">
      <div className="flex items-center">
        <div className="flex items-center justify-between">
          <a href="/" className="flex">
            <img src={Bukapedia} alt="logo" className="h-8 mr-3"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Bukapedia</span>
          </a>
        </div>
      </div>
    </div>
  )
}
    // {/* <Provider store={store}> */}
    //     <Router />
    //   {/* </Provider> */}
    // </>

export default App;
