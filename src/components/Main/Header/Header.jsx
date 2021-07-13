import React from "react";
import s from "./Header.module.css"


const Header =() => {
    return <header className={s.header}>
    <img className={s.logo} src = "/assets/images/logo.png"/>
    <div className={s.signin} > <a href="#"> sign in </a>  </div>
  </header>
  
}

export default Header;