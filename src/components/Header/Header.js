import React from "react";
import Logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-item">
            <a href="/order">Order</a>
            <a href="/order-preview">Order Preview</a>
            <a href="/manage-inventory">Manage Inventory</a>
            <a href="/login">LogIn</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
