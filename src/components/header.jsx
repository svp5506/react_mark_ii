import React from "react";
import ReactDOM from "react-dom";
import logo from "../assets/AqLogo.png";
import './header.css';

const Header = () => {
  return (
      
<div class="header">
  <img class="ui left spaced image" src={logo} />
</div>

  );
};

export default Header;