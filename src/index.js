import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import { managerPath } from './routes/managerPath';
import { engineerPath } from './routes/engineerPath';
import { workerPath } from './routes/workerPath';
import { useStore } from './store'; 
import './App.module.css'
import Redirect from "./redirect";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
