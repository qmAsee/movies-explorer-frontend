import React from "react";
import { Link } from "react-router-dom";

import NavigationUnauth from "../NavigationUnauth/NavigationUnauth";
import NavigationAuth from "../NavigationAuth/NavigationAuth";

function Header({isLoggedIn}) {
  return (
    <header className={isLoggedIn ? 'header header_type_auth' : 'header'}>
        <Link to='/' className="header__logo"></Link>
        {!isLoggedIn ? <NavigationUnauth /> : <NavigationAuth />}
    </header>
  )
}

export default Header;
