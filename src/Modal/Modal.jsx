import React from 'react';
import classes from './Modal.module.css'; // Подключаем стили

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Если модальное окно закрыто, возвращаем null

  return (
    <div className={classes.modal_overlay} onClick={onClose}>
      <div className={classes.modal} onClick={e => e.stopPropagation()}>
        <div className={classes.modal_content}>
          {children} {/* Контент модального окна */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
