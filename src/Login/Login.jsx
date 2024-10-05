import React from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import './Login.module.css';
import Modal from "../Modal/Modal";

const Login = () => {
  const { login, setLogin, password, setPassword, setIsAuth } = useStore();
  const navigate = useNavigate(); // Теперь `useNavigate` будет работать корректно

  const handleLogin = () => {
    // Примитивная проверка логина/пароля
    if (
      (login === "manager" && password === "manager") ||
      (login === "engineer" && password === "engineer") ||
      (login === "worker" && password === "worker")
    ) {
      setIsAuth(true); // Обновляем статус авторизации
      localStorage.setItem("isAuth", true);
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      navigate("/"); // После успешного логина, перенаправляем на главную страницу
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <Modal isOpen={true}>
      <div className={classes.LoginDiv}>
        <div>Вход</div>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className=""
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Войти</button>
      </div>
    </Modal>
  );
};

export default Login;
