import React from 'react'
import ReactDom from 'react-dom/client'

const projects =[
    {'name':'QR Component', 'skills': 'HTML CSS' ,'image':'./images/projects/qrc-component.jpg', 'liveurl': 'https://frontend-mentor-qr-code-gamma.vercel.app/', 'solutionurl': 'https://github.com/Tochukwu-1/Frontend-Mentor-QR-Code'},
    {'name':'Form', 'skills': 'HTML CSS JS' ,'image':'./images/projects/contact-form.png', 'liveurl': '', 'solutionurl': ''},
    {'name':'Mortgage Calculator', 'skills': 'HTML CSS React' ,'image':'./images/projects/mortgage-calc.png', 'liveurl': 'https://tochukwu-1.github.io/Mortgage-repayment-calculator/', 'solutionurl': 'https://github.com/Tochukwu-1/Frontend-Mentor---Mortgage-repayment-calculator'},
    {'name':'Portfolio', 'skills': 'HTML CSS React' ,'image':'/images/projects/Portfolio.PNG', 'liveurl': 'https://tochukwu-1.github.io/My-portfolio/', 'solutionurl': ''}
]
 
function Projects() {
    return (
        <div className='projects'>
            <h2>Projects 
                <a href="#contactme">CONTACT ME</a>
            </h2>
            <ul>
                {projects.map((project)=> 
                <li>
                    <a href={project.liveurl} target='_blank'>
                        <img src={project.image} alt={project.name} />
                        <h2>{project.name}</h2>
                        <p>{project.skills}</p>
                    </a>
                    <p><a href={project.solutionurl}>Solution Url</a></p>

                </li>)}
            </ul>
            
        </div>
    )
}

export default Projects
