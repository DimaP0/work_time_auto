import React from 'react';
import classes from './Header.module.css';
import {useStore} from "../store";

const Header = ({children}) => {
  const {setIsAuth} = useStore();

  return (
    <div className={classes.header}>
      <div className={classes.userAvatar}>
        <img className={classes.userAvatar} src="/userAvatar.png" alt="UserAvatar"/>
        <div 
          className={classes.logOut}
          onClick={ () => {
            localStorage.setItem("isAuth", false);
            setIsAuth(false);
          }}
        >Выход</div> 
      </div>
      <div className={classes.headerItem}>
        {children}
      </div>
    </div>
  );
};

export default Header;