import React from 'react';
import {RouterProvider, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

import { managerPath } from './managerPath';
import { engineerPath } from './engineerPath';
import { workerPath } from './workerPath';

const Redirect = ({ url = '/' }) => {
  const navigate = useNavigate();
  navigate(url);

  return <div>Redirect to {url}</div>;
}

const Validation = (login, password) => {

  let router = [];

  if (login === "manager" && password === "manager") router = managerPath;
  if (login === "engineer" && password === "engineer") router = engineerPath;
  if (login === "worker" && password === "worker") router = workerPath;
  else router = [
    {
      path: "*",
      element: <Redirect url="/login" />
    },
    {
      path: "/login",
      element: <Login />
    },
  ]

  return (
    <RouterProvider router={router} />
  );
};

export default Validation;