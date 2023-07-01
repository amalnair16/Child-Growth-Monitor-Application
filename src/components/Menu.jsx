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
          <a id="vaccine" href="#" >
            <img src="../images/vaccination(1).png" alt="" /></a>
        </li>
        <li className="menu-item">
          <a href="#"></a>
        </li>
        <li className="menu-item">
          <a href="#"></a>
        </li>
        <li className="menu-item">
          <a href="#"></a>
        </li>
        <li className="menu-item">
          <a href="#"></a>
        </li>
        <li className="menu-item">
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
