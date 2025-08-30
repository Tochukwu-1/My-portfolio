import React, { useState } from 'react';
import ReactDom from 'react-dom/client';


function Menu() {
    const [button, setButton] = useState("=");
    return (
        <div className='Menu'>
            <button onClick={()=> setButton(button=="=" ? "X": "=")} >{button}</button>
            <ul className="menuList" style={button=== "X"? {position: 'absolute'}: {display: "none"}}>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contactme">Contact me</a></li>
            </ul>
        </div>
    )
}

export default Menu;
