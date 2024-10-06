import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Redirect from './redirect';
import Login from './Login/Login';
import { useStore } from './store';
import { managerPath } from './routes/managerPath';
import { engineerPath } from './routes/engineerPath';
import { workerPath } from './routes/workerPath';
import { RouterProvider } from 'react-router-dom';

const baseRouter = createBrowserRouter([
  {
    path: "*",
    element: <Redirect url="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

const App = () => {
  let { login, password, isAuth } = useStore(); 

  login = sessionStorage.getItem("login");
  password = sessionStorage.getItem("password");
  isAuth = sessionStorage.getItem("isAuth") === "true";

  const getRouter = () => {
    // В зависимости от роли пользователя выбираем маршруты
    if (isAuth && login === "manager" && password === "manager") {
      return createBrowserRouter(managerPath);
    }
    if (isAuth && login === "engineer" && password === "engineer") {
      return createBrowserRouter(engineerPath);
    }
    if (isAuth && login === "worker" && password === "worker") {
      return createBrowserRouter(workerPath);
    }

    return baseRouter; 
  };

  const router = getRouter();

  return (
    <RouterProvider router={router} /> 
  );
};

export default App;