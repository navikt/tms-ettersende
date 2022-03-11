import React from "react";
import App from "./App";
import "./App.css";
import Providers from "./providers/Providers";

const Mikrofrontend = () => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};

export default Mikrofrontend;
