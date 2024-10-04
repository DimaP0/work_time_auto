import React from 'react';
import classes from './Header.module.css';

const Header = ({children}) => {
  return (
    <div className={classes.header}>
      <div className={classes.userAvatar}>
        <img className={classes.userAvatar} src="/userAvatar.png" alt="UserAvatar"/>
        <div className={classes.logOut}>Выход</div> 
      </div>
      <div className={classes.headerItem}>
        {children}
      </div>
    </div>
  );
};

export default Header;