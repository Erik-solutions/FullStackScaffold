import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import  {ThemeProvider} from "./components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
    <App />
  </ThemeProvider>
);








