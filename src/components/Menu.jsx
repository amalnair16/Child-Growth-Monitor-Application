import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <input id="menu-toggler" defaultChecked className="menu-toggler" type="checkbox" />
      <label htmlFor="menu-toggler"></label>
      <ul>
        <li className="menu-item">
          <Link to="/bmi">BMI</Link>
        </li>
        <li className="menu-item">
          <a href="#">Vaccination</a>
        </li>
        <li className="menu-item">
          <a href="#">Common Diseases</a>
        </li>
        <li className="menu-item">
        <Link to="/chart">Growth Chart</Link>
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
