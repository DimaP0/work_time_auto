import React, { useRef } from 'react';
import Modal from '../Modal/Modal';
import './Login.module.css'

const Login = () => {
  const password = useRef();

  console.log(password);

  return (
    <Modal isOpen={true}>
      <h3>Вход</h3> 
      <input type="text" placeholder='Логин' ref={password}/>
      <input type="password" placeholder='Пароль'/>
      <button >Войти</button>
    </Modal>
  );
};

export default Login;