import React, { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import NicoPic from "../images/nico-pic.png";
import Flower from "../components/Flower";
import '../css/home.css';

const Home = () => {
    const [bubArray, setBubArray] = useState([]);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        //title animation
        gsap.set(".home-container .title div h1", {scale: 0, opacity: 0, y: 0})

        gsap.to(`.home-container .title div h1`, {
            scale: 1,
            opacity: 1, 
            color: (function(){var m = [];
            for (var i = 50; i < 60; i++) {
                m.push("#"+ Math.floor((Math.random() * 10))+ Math.floor((Math.random() * 10))+Math.floor((Math.random() * 10))); // to construct a color arrary.
            } return m;}),
            y: -45,
            ease: "bounce",
            duration: 1.5,
            transformOrigin: "50% 100%",
            stagger: 0.06,
            textShadow: "0px 0px 8px rgb(231, 228, 228)"
        })

        let contentST = gsap.timeline({
            scrollTrigger: {
              trigger: ".content",
              start: "-=400",
              end: "-=350",
              scrub: 1,
            //   markers: true
            } 
          });
        
    }, [])

    return(
        <div className="home-container">
            <div className="title">
                <div><h1>W</h1><h1>E</h1><h1>L</h1><h1>C</h1><h1>O</h1><h1>M</h1><h1>E</h1><h1>&nbsp;</h1></div>
                <div><h1>T</h1><h1>O</h1><h1>&nbsp;</h1><h1>M</h1><h1>Y</h1><h1>&nbsp;</h1></div>
                <div><h1>P</h1><h1>O</h1><h1>R</h1><h1>T</h1><h1>F</h1><h1>O</h1><h1>L</h1><h1>I</h1><h1>O</h1></div>
            </div>
            <div className="blurb">
                <img src={NicoPic}/>
                <p>Hi there 👋
Hello! I go by the name Nico Chikuji, and welcome to my github! I am a software engineer with a passion for keeping up with the latest trends on what's going on with the tech world. I love working on teams to code new projects and am always looking for new opportunities to grow and learn both inside and outside of the field. Feel free to browse through any of my public repos and feel free to reach out whenever!
My favorite tech stacks include the following: React.js, Express.js/Node, and firebase.
Email: chiku524@icloud.com</p>
            </div>
        </div>
    )
}

export default Home;