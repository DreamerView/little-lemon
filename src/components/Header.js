import React from "react";
import logo from "./logo.png"; // Предполагаем, что логотип в корне src

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" width="150" />
    </header>
  );
}

export default Header;
