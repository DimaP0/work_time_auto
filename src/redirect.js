// Redirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ url = "/" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(url); // Редирект на указанный URL
  }, [navigate, url]);

  return <h1>Redirecting...</h1>; // Показываем сообщение во время редиректа
};

export default Redirect; // Экспортируем компонент
