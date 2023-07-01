import React from "react";
import "../assets/css/Menu.css";
import "../images/vaccination(1).png";

const Menu = () => {
  return (
    <nav className="menu">
      <input
        id="menu-toggler"
        defaultChecked
        className="menu-toggler"
        type="checkbox"
      />
      <label htmlFor="menu-toggler"></label>
      <ul>
        <li className="menu-item">
          <a href="#">BMI</a>
        </li>
        <li className="menu-item">
          <a href="#">Vaccination</a>
        </li>
        <li className="menu-item">
          <a href="#">Products</a>
        </li>
        <li className="menu-item">
          <a href="#">Growth Charts</a>
        </li>
        <li className="menu-item">
          <a href="#">Mental Health</a>
        </li>
        <li className="menu-item">
          <a href="#">Nutrition's</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
