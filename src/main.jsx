import React from "react";
import ReactDOM from "react-dom";
import Mikrofrontend from "./Mikrofrontend";
import { injectDecoratorClientSide } from "@navikt/nav-dekoratoren-moduler/csr";
import "./index.css";

const startDecorator = async () => {
  await injectDecoratorClientSide({
    env: "dev",
  });
};

if (process.env.NODE_ENV === "development") {
  startDecorator();
}

ReactDOM.render(
  <React.StrictMode>
    <Mikrofrontend />
  </React.StrictMode>,
  document.getElementById("root")
);
