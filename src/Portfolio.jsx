import React from "react";
import ReactDom from "react-dom/client";
import Menu from "./subs/Menu.jsx";
import "./Portfolio.css";
import Skills from "./subs/Skills.jsx";
import Projects from "./Projects.jsx";
import Github from "./github_icon.svg";
import Linkedin  from './assets/Icons/linkedin.svg';
import Twitter  from './assets/Icons/twitter.svg';
import Frontendmentor  from './assets/Icons/frontendmentor.png';


import Contact from "./Contact.jsx";

function Portfolio() {
  return (
    <div className="body">
      <div className="portfolio">
        <header>
          <div className="left">
            <Menu />
            <h4>Asogwa Tochukwu</h4>
          </div>
          <div className="right">
            <li>
              <a href="https://www.github.com/Tochukwu-1/">
                <img src={Github} alt=""  className="icons"/>
                {/* <Github  /> */}
              </a>
            </li>
            <li>
              <a href="https://www.frontendmentor.io/Tochukwu-1">
                <img src={Frontendmentor} alt="Frontendmentor"  className="icons"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <img src={Linkedin} alt="Linkedin"  className="icons"/>
              </a>
            </li>
            <li>
              <a href="https://www.X.com"><img src={Twitter} alt="Twitter"  className="icons" /></a>
            </li>
          </div>
        </header>
        <main>
          <section id="profile">
            <div className="leftProfile">
              <h1>
                Nice to meet you!
                <br />
                I'm Asogwa Tochukwu.
              </h1>
              <p className="desc">
                Based in Nigeria, I'm a front-end developer
                <br /> passionate about building accessible webpages
                <br /> that users love.
              </p>
              <br />
              <br />
              <p className="contact">
                <a href="#contactme">CONTACT ME</a>
              </p>
            </div>
            <div className="rightProfile">
              <img src="/images/IMG-20231004-WA0006.jpg" alt="" />
            </div>
          </section>
          <hr />
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
      </div>
      <footer id="contactme">
        <div className="contact">
          <div className="leftfooter">
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'will get back to you as soon as
              possible
            </p>
          </div>
          <div className="rightfooter">
            <Contact />
          </div>
        </div>
        <div className="footer-link">
          <div className="left-footer-link">
            <h4>Asogwa Tochukwu</h4>
          </div>
          <div className="right-footer-link">
            <li>
              <a href="https://www.github.com/Tochukwu-1/">Github</a>
            </li>
            <li>
              <a href="frontendmentor.io/Tochukwu-1">Frontendmentor</a>
            </li>
            <li>
              <a href="linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="X.com">Twitter</a>
            </li>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
