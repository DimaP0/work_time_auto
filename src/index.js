import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
import "./App.module.css";

// import React from 'react';
import {createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Login from './Login/Login';

import { managerPath } from './validation/managerPath';
import { engineerPath } from './validation/engineerPath';
import { workerPath } from './validation/workerPath';

export function Redirect({url = "/"}) {
  const navigate = useNavigate();

  // Пример программного редиректа
  useEffect(() => {
    // После некоторой логики или условия
    navigate(url);
  }, [navigate, url]);

  return <h1>Redirecting...</h1>;
}

let router = createBrowserRouter([
    {
      path: "*",
      element: <Redirect url="/login" />
    },
    {
      path: "/login",
      element: <Login />
    },
  ]);

  let login = "manager";
  let password = "manager";
  if (login === "manager" && password === "manager") router = createBrowserRouter(managerPath);
  // if (login === "engineer" && password === "engineer") router = createBrowserRouter(engineerPath);
  // if (login === "worker" && password === "worker") router = createBrowserRouter(workerPath);

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );