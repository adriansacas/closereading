import './App.css';

import React from "react";
import RouteSwitch from "./RouteSwitch";
import GlobalNavBar from "./components/GlobalNavBar/GlobalNavBar";

function App() {
  return (
      <div>
          <RouteSwitch></RouteSwitch>
          <GlobalNavBar></GlobalNavBar>
      </div>
  );

};

export default App;