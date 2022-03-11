import React from "react";
import { node } from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";
import LanguageProvider from "./LanguageProvider";

const Providers = ({ children }) => (
  <LanguageProvider defaultSprak="nb">
    <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
  </LanguageProvider>
);

Providers.propTypes = {
  children: node.isRequired,
};

export default Providers;
