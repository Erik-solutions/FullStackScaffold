import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import  {ThemeProvider} from "./components/ThemeProvider";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
  <BrowserRouter>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </BrowserRouter>
</React.StrictMode>
    
);








