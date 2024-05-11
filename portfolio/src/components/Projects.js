import React, { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from "react-external-link";
import ExpatJournal from "../images/expat-journal.png";
import HajjarAssociatesRemake from "../images/hajjar-associates-remake.png";
import Xtrades from "../images/xtrades.png";
import Metaverse from "../images/metaverse.png";
import AnimationsSite from "../images/animations-site.png";
import '../css/projects.css';

const Projects = () => {

    useLayoutEffect(() => {
        gsap.set(".cards-container .projects-title div h1", {scale: 0, opacity: 0, y: 0})

        gsap.to(`.cards-container .projects-title div h1`, {
            scale: 1,
            opacity: 1, 
            color: "#00a4d6",
            y: -45,
            ease: "ease",
            duration: 0.15,
            transformOrigin: "50% 50%",
            stagger: {from: "edges", amount: 0.7},
            textShadow: "0px 0px 8px rgb(32, 32, 32)"
        })
    }, [])
    
    //anim project border
  useLayoutEffect(() => {
    let animBorder = gsap.timeline();
    animBorder
    .from(".cards-container", {
        boxShadow: "0px 0px 10px #424141",
        borderRadius: '10%',
        ease: "elastic",
        yoyo: true
    })
    .to(".cards-container", {
      keyframes: {
        boxShadow: ["0px 0px 10px #424141", "0px 0px 15px #e2bd1a", "0px 0px 20px #29f176", "0px 0px 20px rgb(41, 128, 241)", "0px 0px 15px #c418bb", "0px 0px 10px #424141"],
      },
      repeat: -1,
      duration: 10,
    })
  }, [])

  useEffect(() => {
    let expat = document.querySelector(".project-link.expat");
    let hajjar = document.querySelector(".project-link.hajjar");
    let xtrades = document.querySelector(".project-link.xtrades");
    let metaverse = document.querySelector(".project-link.metaverse");
    let animations = document.querySelector(".project-link.animations");
    let expatImg = document.querySelector(".expat-img");
    let hajjarImg = document.querySelector(".hajjar-img");
    let xtradesImg = document.querySelector(".xtrades-img");
    let metaverseImg = document.querySelector(".metaverse-img");
    let animationsImg = document.querySelector(".animations-img");

    expat.addEventListener("mouseover", () => {gsap.to(expatImg, {zIndex: 1, display: "block", scale: 1})})
    expat.addEventListener("mouseleave", () => {gsap.to(expatImg, {})})

    hajjar.addEventListener("mouseover", () => {gsap.to(hajjarImg, {zIndex: 1, display: "block", scale: 1})})
    hajjar.addEventListener("mouseleave", () => {gsap.to(hajjarImg, {display: "none"})})

    xtrades.addEventListener("mouseover", () => {gsap.to(xtradesImg, {zIndex: 1, display: "block", scale: 1})})
    xtrades.addEventListener("mouseleave", () => {gsap.to(xtradesImg, {display: "none"})})

    metaverse.addEventListener("mouseover", () => {gsap.to(metaverseImg, {zIndex: 1, display: "block", scale: 1})})
    metaverse.addEventListener("mouseleave", () => {gsap.to(metaverseImg, {display: "none"})})

    animations.addEventListener("mouseover", () => {gsap.to(animationsImg, {zIndex: 1, display: "block", scale: 1})})
    animations.addEventListener("mouseleave", () => {gsap.to(animationsImg, {display: "none"})})
    
  }, [])
    

    return(
        <div className="cards-container">
            <div className='projects-title'>
                    <div><h1>H</h1><h1>E</h1><h1>R</h1><h1>E</h1><h1>&nbsp;</h1><h1>A</h1><h1>R</h1><h1>E</h1></div>
                    <div className="second-row"><h1>&nbsp;</h1><h1>S</h1><h1>O</h1><h1>M</h1><h1>E</h1><h1>&nbsp;</h1></div>
                    <div className="third-row"><h1>O</h1><h1>F</h1><h1>&nbsp;</h1><h1>M</h1><h1>Y</h1><h1>&nbsp;</h1><h1>S</h1><h1>I</h1><h1>D</h1><h1>E</h1></div>
                    <div className="last-row"><h1>&nbsp;</h1><h1>P</h1><h1>R</h1><h1>O</h1><h1>J</h1><h1>E</h1><h1>C</h1><h1>T</h1><h1>S</h1></div>
            </div>
            <div className="project-imgs">
                <img src={ExpatJournal} className="expat-img"/> 
                <img src={HajjarAssociatesRemake} className="hajjar-img"/> 
                <img src={Xtrades} className="xtrades-img"/> 
                <img src={Metaverse} className="metaverse-img"/>
                <img src={AnimationsSite} className="animations-img"/> 
            </div>
            <div className="projects">
                <ExternalLink href="https://portfolio-site-chiku524.vercel.app/" className="project-link animations">
                    <div className="project project-1">  
                        <span className="animations">Animations Site</span>
                    </div>
                </ExternalLink>
                <ExternalLink href="https://expatjournal3.netlify.app/" className="project-link expat">
                    <div className="project project-1">  
                        <span className="expat">Expat Journal</span>
                    </div>
                </ExternalLink>
                <ExternalLink href="https://hajjar-associates-remake.vercel.app/" className="project-link hajjar">
                    <div className="project project-1">  
                        <span className="hajjar">Hajjar Associates Remake</span>
                    </div>
                </ExternalLink>
                <ExternalLink href="https://xtrades-challenge.vercel.app/" className="project-link xtrades">
                    <div className="project project-1">  
                        <span className="xtrades">X-trades 24 hour challenge</span>
                    </div>
                </ExternalLink>
                <ExternalLink href="https://metaverse-chiku524.vercel.app/" className="project-link metaverse">
                    <div className="project project-1">  
                        <span className="metaverse">Metaverse</span>
                    </div>
                </ExternalLink>
                
            </div>
        </div>
    )
}

export default Projects;





