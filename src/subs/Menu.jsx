import React, { useState } from "react";
import ReactDom from "react-dom/client";

import "../css/menu.css";

import menuIcon from "../assets/Icons/menuIcon.svg";
import closeIcon from "../assets/Icons/closeIcon.svg";

function Menu() {
  const [menu, setMenu] = useState(menuIcon);
  return (
    <div className={menu === menuIcon ? "" : "shadow"} 
      onClick={()=>
        setMenu(
            menu === menuIcon
              ? closeIcon
              : menuIcon)}>
      <div
        className={` Menu ${
          menu === closeIcon ? "menu" : ""
        }`}
        onClick={() =>
          setMenu(
            menu === menuIcon
              ? closeIcon
              : menuIcon
          )
        }
      >
        <img
          src={menu}
          className="icons"
          onClick={() =>
            setMenu(
              menu === "./assets/Icons/menuIcon.svg"
                ? closeIcon
                : "./assets/Icons/menuIcon.svg"
            )
          }
        />
        <ul
          className="menuList"
          style={
            menu === closeIcon
              ? { position: "absolute" }
              : { display: "none" }
          }
        >
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contactme">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
