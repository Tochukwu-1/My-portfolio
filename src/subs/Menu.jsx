import React, { useState } from "react";
import ReactDom from "react-dom/client";
import "../css/menu.css";

function Menu() {
  const [menu, setMenu] = useState("src/assets/Icons/menuIcon.svg");
  return (
    <div className={menu === "src/assets/Icons/menuIcon.svg" ? "" : "shadow"} 
      onClick={()=>
        setMenu(
            menu === "src/assets/Icons/menuIcon.svg"
              ? "src/assets/Icons/closeIcon.svg"
              : "src/assets/Icons/menuIcon.svg")}>
      <div
        className={` Menu ${
          menu === "src/assets/Icons/closeIcon.svg" ? "menu" : ""
        }`}
        onClick={() =>
          setMenu(
            menu === "src/assets/Icons/menuIcon.svg"
              ? "src/assets/Icons/closeIcon.svg"
              : "src/assets/Icons/menuIcon.svg"
          )
        }
      >
        <img
          src={menu}
          className="icons"
          onClick={() =>
            setMenu(
              menu === "src/assets/Icons/menuIcon.svg"
                ? "src/assets/Icons/closeIcon.svg"
                : "src/assets/Icons/menuIcon.svg"
            )
          }
        />
        <ul
          className="menuList"
          style={
            menu === "src/assets/Icons/closeIcon.svg"
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
