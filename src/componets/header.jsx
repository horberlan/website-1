import React from 'react';
// import logo from "../img/logo/logo.png";


//   import { Link } from 'react-router';
window.onload = function () {
   const hamburger = document.querySelector(".hamburger");
   const navMenu = document.querySelector(".nav-menu");
    if(hamburger){
   hamburger.addEventListener("click", mobileMenu);
}
   async function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
   }
   const navLink = document.querySelectorAll(".nav-link");

   navLink.forEach(n => n.addEventListener("click", closeMenu));

   async function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
   }
}
   export default class Nav extends React.Component {
    render() { 

      return (

            <header className="header" id="#nav">
                    <nav className="navbar navbar-fixed-top">
                        <div href="#pageB" className="nav-logo">
                            </div> 
                        
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a href="#carousel">INICIO</a>
                            </li>
                            <li className="nav-item">
                            <a href="#carousel">
                        PERSONALISE{" "}
                        <p className="subtopnav">
                        Sua&nbsp;imagem!
                        </p>
                        </a>                </li>
                            <li className="nav-item">
                            <a href="#pageC">
                        ANIME
                        <p className="subtopnav">
                        Suas&nbsp;ideias!
                        </p>
                        </a>                </li>
                            <li className="nav-item">
                            <a href="#contact">CONTATO</a>
                            </li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                    
            </header>


         );
    }
  }