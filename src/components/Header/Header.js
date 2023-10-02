import React from "react";
import { Link, useLocation } from "react-router-dom";

import NavigationUnauth from "../NavigationUnauth/NavigationUnauth";
import NavigationAuth from "../NavigationAuth/NavigationAuth";

function Header({ isLoggedIn }) {
  const location = useLocation()

  return (
    <header className='header' style={location.pathname === '/' ? {background: '#073042'} : {background: '#202020'}}>
        <Link to='/' className="header__logo"></Link>
        {!isLoggedIn ? <NavigationUnauth /> : <NavigationAuth />}
    </header>
  )
}

export default Header;
