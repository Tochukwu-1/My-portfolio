import React from 'react'
import ReactDom from 'react-dom/client'


function Skills() {
    const yeardate = new Date().getFullYear();
    // const date = new Date().getFullYear();
    const monthdate = new Date().getMonth();
    return (
        <ul>
            <li className="skill">
                <h3>HTML</h3>
                <p className="experience">{yeardate - 2022} Years Experience</p>
            </li>
            <li className="skill">
                <h3>CSS</h3>
                <p className="experience">{yeardate - 2022} Years Experience</p>
            </li>
            <li className="skill">
                <h3>JavaScript</h3>
                <p className="experience">{yeardate - 2022} Years Experience</p>
            </li>
            <li className="skill">
                <h3>React</h3>
                <p className="experience">{monthdate - 2 } Months Experience</p>
            </li>
           
        </ul>
    )
}

export default Skills
