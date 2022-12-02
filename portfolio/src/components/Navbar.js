import React, { useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../css/navbar.css';

const NavBar = () => {

    //nav bar hover animations
    useLayoutEffect(() => {
        const logo = document.querySelector(".logo");

        let hover = gsap.timeline({paused: true});
        hover.to(".logo h1", {
            scale: 1.12, 
            textShadow: "0px 0px 10px rgb(34, 115, 238, 0.8)", 
            duration: 1, 
            ease: "elastic", 
            y: -5, 
            stagger: 0.1
        })
        
        logo.addEventListener("mouseenter", () => hover.play());
        logo.addEventListener("mouseleave", () => hover.reverse());

    }, [])

    return(
        <div className="navbarContainer">
            <div className="navbar">
                <Link to="/home" className="logo">
                    <h1 className="first">N&nbsp;</h1>
                    <h1 className="second">K&nbsp;</h1>
                    <h1 className="third">C&nbsp;</h1>
                </Link>
                <div className="links">
                    <Link to="/home" className="nav-link"><span>Home</span></Link>
                    <Link to="/projects" className="nav-link"><span>Projects</span></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;