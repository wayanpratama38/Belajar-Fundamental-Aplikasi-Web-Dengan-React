import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
// import AppWrapper from './App';
import AppWrapper from "./App1";
import { SessionProvider } from "./contexts/SessionContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SessionProvider>
      <AppWrapper />
    </SessionProvider>
  </BrowserRouter>,
);
