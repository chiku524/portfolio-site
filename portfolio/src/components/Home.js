import React, { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NicoPic from "../images/nico-pic.png";
import {ReactComponent as ArrowIcon} from "../images/arrow-icon.svg";
import Page2 from "./Page2";
import Page3 from "../components/Page3";
import '../css/home.css';

const Home = () => {

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        //title animation
        gsap.set(".home-container .title div h1", {scale: 0, opacity: 0, y: 0})

        gsap.to(`.home-container .title div h1`, {
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

        gsap.set(".home-container .blurb .nico-picture", {scale: 0, opacity: 0, y: 0})

        gsap.to(`.home-container .blurb .nico-picture`, {
            scale: 1,
            opacity: 1,
            y: -45,
            duration: 0.75,
            boxShadow: "0px 0px 8px rgb(231, 228, 228)",
            rotate: "360deg",
            delay: 1
        })

        gsap.set(".home-container .blurb p", {opacity: 0, y: 20, x: 100})

        gsap.to(`.home-container .blurb p`, {
            opacity: 1,
            y: 75,
            duration: 1,
            textShadow: "0px 0px 2px rgb(231, 228, 228)",
            delay: 1.5
        })

        gsap.set(".svg-container", {opacity: 0, x: 450, y: 100, rotate: 275, rotateY: 180, width: 100, height: 100})

        gsap.to(`.svg-container`, {
            opacity: 1,
            duration: 1.5,
            delay: 2
        })
        
        gsap.set(".page-2", {position: "absolute", top: 80, x: 2500, scale: 1, width: "100%", height: "100%", display: "none"});
    }, [])

    useLayoutEffect(() => {
        let arrowSVG = document.querySelector("#arrow-icon-svg");
        let page1 = document.querySelector(".page-1");
        let page2 = document.querySelector(".page-2");
        arrowSVG.addEventListener("click", () => {
            let page1TL = gsap.timeline();
            page1.classList.remove("active");
            page2.classList.add("active");
            console.log(page1.classList);
            console.log(page2.classList);

            page1TL.to(page1, {rotateZ: 5, scale: 0.4, duration: 1})
                    .to(page1, {x: -2500, duration: 1, display: "none"})
                    .to(page2, {x: 0, scale: 1, display: "block", duration: 1})})
    }, [])

    useLayoutEffect(() => {
        gsap.set(".page-3", {position: "absolute", top: 80, x: 2500, scale: 1, width: "100%", height: "100%", display: "none"});
        gsap.set(".page-2 .svg-container", {opacity: 0, rotate: 275, rotateY: 180, width: 100, height: 100, position: "absolute"});

        let arrowSVG = document.querySelector(".page-2 #arrow-icon-svg");
        let page2tank = document.querySelector(".page-2 .tank-container");
        let page2 = document.querySelector(".page-2");
        let page3 = document.querySelector(".page-3");

        arrowSVG.addEventListener("click", () => {
            let page2TL = gsap.timeline();
            page2.classList.remove("active");
            page3.classList.add("active");
            console.log(page2.classList);
            console.log(page3.classList);

            page2TL.to(page2tank, {rotateZ: 5, scale: 0.4, duration: 1})
                    .to(page2tank, { x: -2500, duration: 1})
                    .to(page3, {x: 0, scale: 1, display: "block", duration: 1})})
    }, [])

    return(
        <div className="home-container">
            <div className="page-1 active">
                <div className="title">
                    <div><h1>W</h1><h1>E</h1><h1>L</h1><h1>C</h1><h1>O</h1><h1>M</h1><h1>E</h1><h1>&nbsp;</h1></div>
                    <div><h1>T</h1><h1>O</h1><h1>&nbsp;</h1><h1>M</h1><h1>Y</h1><h1>&nbsp;</h1></div>
                    <div><h1>P</h1><h1>O</h1><h1>R</h1><h1>T</h1><h1>F</h1><h1>O</h1><h1>L</h1><h1>I</h1><h1>O</h1></div>
                </div>
                <div className="blurb">
                    <img src={NicoPic} className="nico-picture" />
                    <div className="content">
                        <p>Hi there 👋
    Hello! I go by the name Nico Chikuji, and welcome to my portfolio! I am a software engineer with a passion for keeping up with the latest trends on what's going on with the tech world. I love working on teams to code new projects and am always looking for new opportunities to grow and learn both inside and outside of the field. Feel free to browse through any of my public repos and feel free to reach out whenever!
    My favorite tech stacks include the following: React.js/Redux, Express.js/Node, and Firebase.
                        </p>
                        <div className="svg-container">
                            <ArrowIcon className="arrow-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <Page2 className="page-2" />
            <Page3 className="page-3" />
        </div>
    )
}

export default Home;