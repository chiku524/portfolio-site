import React, { useState, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Home from "../components/Home";
import '../css/navbar.css';

const NavBar = () => {
    const [fade, setFade] = useState('');

    const handleScroll = () => {
        if(window.scrollY > 0 && fade !== 'fadein') {
            setFade('fadein')
        } else if(window.scrollY <= 0) {
            setFade('fadeout')
        }
    }

    window.addEventListener('scroll', handleScroll);

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

    const homeClicker = () => {
        let pg1 = document.querySelector(".page-1");
        let pg2 = document.querySelector(".page-2");
        let pg3 = document.querySelector(".page-3");
        if(pg2.classList.contains("active")) {
            gsap.to(pg2, {display: "none", x: 2500, scale: 1, rotateZ: 0, duration: 1})
                .to(pg1, {display: "block", x: 0, scale: 1, rotateZ: -5, duration: 1})
        }
        if(pg3.classList.contains("active")) {
            gsap.to(pg3, {display: "none", x: 2500, scale: 1, rotateZ: 0, duration: 1})
                .to(pg1, {display: "block", x: 0, scale: 1, rotateZ: -5, duration: 1})
        }
    }

    return(
        <div className={`${fade} navbarContainer`}>
            <div className="navbar">
                <Link to="/home" className="logo" onClick={homeClicker}>
                    <h1 className="first">N&nbsp;</h1>
                    <h1 className="second">K&nbsp;</h1>
                    <h1 className="third">C&nbsp;</h1>
                </Link>
                <div className="links">
                    <Link to="/home" className="nav-link" onClick={homeClicker}><span>Home</span></Link>
                    <Link to="/projects" className="nav-link"><span>Projects</span></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;