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

// Компонент для базовых маршрутов
const baseRouter = createBrowserRouter([
  {
    path: "*",
    element: <Redirect url="/login" /> // Показываем логин по умолчанию
  },
  {
    path: "/login",
    element: <Login /> // Страница логина
  },
]);

const App = () => {
  let { login, password, isAuth } = useStore(); 

  login = localStorage.getItem("login");
  password = localStorage.getItem("password");
  isAuth = localStorage.getItem("isAuth") === "true";

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

    return baseRouter; // Возвращаем базовые маршруты, если не авторизован
  };

  const router = getRouter();

  return (
    <RouterProvider router={router} /> 
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
