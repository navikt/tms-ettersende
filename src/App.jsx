import React from "react";
import MainComponent from "./components/mainComponent/MainComponent";
import "@navikt/ds-css";
import "./App.css";

function App() {
  return (
    <main className="main">
      <div className="app">
        <MainComponent />
      </div>
    </main>
  );
}

export default App;
