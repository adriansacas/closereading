import './App.css';

import React from "react";
import RouteSwitch from "./RouteSwitch";
import GlobalNavBar from "./components/navigation/GlobalNavBar";

function App() {
  return (
      <div>
          <GlobalNavBar></GlobalNavBar>
          <RouteSwitch></RouteSwitch>
      </div>
  );
}

export default App;