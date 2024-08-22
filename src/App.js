// src/App.js

import React from "react";
import "./assets/App.css";
import Instructions from "./components/landing.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Instructions />
      </header>
    </div>
  );
}

export default App;
