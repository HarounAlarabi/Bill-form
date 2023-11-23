import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Collections</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <nav className={active ? "nav-menu active" : "nav-menu"}>
        <Link className="nav-item" to="/">
          Bill <span className="sr-only"></span>
        </Link>
        <Link className="nav-item " to="/friendsList">
          Friend List
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
