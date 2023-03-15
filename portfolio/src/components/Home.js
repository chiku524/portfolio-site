import React, { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
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
            for (var i = 0; i < 80; i++) {
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

    useLayoutEffect(() => {
        var shapes = "rect, circle, ellipse, polyline";
        let flowerCopyTL = gsap.timeline({stagger: 0.5, yoyo: true});
        flowerCopyTL
        .set("#Layer_1", {y: -125})
        .from(".flower-copy", {opacity: 0, delay: 5, duration: 1})
        .fromTo(".flower-copy h2", {opacity: 0, scale: 0, stagger: 1, y: -50, x: -250}, {opacity: 1, scale: 1, stagger: 0.75, y: 300, x: 0, rotateZ: 360})
        
        let shapesTL = gsap.timeline({yoyo: true, delay: 9, repeat: 1});
        shapesTL
        .to(shapes, {duration: 1, rotation:360, scale:0.5, stroke:"white", strokeWidth:6, transformOrigin:"50% 50%", stagger: 0.2})
        .to(shapes, {duration: 0.5, stroke:"red", scale:1.5, opacity:0, stagger: 0.2})

    }, [])

    return(
        <div className="home-container">
            <div className="title">
                <div><h1>W</h1><h1>E</h1><h1>L</h1><h1>C</h1><h1>O</h1><h1>M</h1><h1>E</h1><h1>&nbsp;</h1></div>
                <div><h1>T</h1><h1>O</h1><h1>&nbsp;</h1><h1>M</h1><h1>Y</h1><h1>&nbsp;</h1></div>
                <div><h1>P</h1><h1>O</h1><h1>R</h1><h1>T</h1><h1>F</h1><h1>O</h1><h1>L</h1><h1>I</h1><h1>O</h1></div>
            </div>
            <section className='flower-cup'>
                <div class="flower">
                    <div class="f-wrapper">
                        <div class="flower__line"></div>
                        <div class="f">
                            <div class="flower__leaf flower__leaf--1"></div>
                            <div class="flower__leaf flower__leaf--2"></div>
                            <div class="flower__leaf flower__leaf--3"></div>
                            <div class="flower__leaf flower__leaf--4"></div>
                            <div class="flower__leaf flower__leaf--5"></div>
                            <div class="flower__leaf flower__leaf--6"></div>
                            <div class="flower__leaf flower__leaf--7"></div>
                            <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
                        </div>
                    </div>
                    <div class="f-wrapper f-wrapper--2">
                        <div class="flower__line"></div>
                        <div class="f">
                            <div class="flower__leaf flower__leaf--1"></div>
                            <div class="flower__leaf flower__leaf--2"></div>
                            <div class="flower__leaf flower__leaf--3"></div>
                            <div class="flower__leaf flower__leaf--4"></div>
                            <div class="flower__leaf flower__leaf--5"></div>
                            <div class="flower__leaf flower__leaf--6"></div>
                            <div class="flower__leaf flower__leaf--7"></div>
                            <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
                        </div>
                    </div>
                    <div class="f-wrapper f-wrapper--3">
                        <div class="flower__line"></div>
                        <div class="f">
                            <div class="flower__leaf flower__leaf--1"></div>
                            <div class="flower__leaf flower__leaf--2"></div>
                            <div class="flower__leaf flower__leaf--3"></div>
                            <div class="flower__leaf flower__leaf--4"></div>
                            <div class="flower__leaf flower__leaf--5"></div>
                            <div class="flower__leaf flower__leaf--6"></div>
                            <div class="flower__leaf flower__leaf--7"></div>
                            <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
                        </div>
                    </div>
                    <div class="flower__glass"></div>
                </div>
                <div className='flower-copy'>
                    <h2>Beautiful flower animation</h2>
                    <h2>created by</h2>
                    <h2>Md Usman Ansari</h2>
                    <svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px" width="570px" height="150px" viewBox="0 0 570 150">
                        <circle fill="none" cx="71.5" cy="77.5" r="51.5" stroke="#88CE02" stroke-width="4"/>
                        <ellipse fill="none" stroke="#88CE02" stroke-width="4" stroke-miterlimit="10" cx="241.4" cy="77.5" rx="78.9" ry="51.5"/>
                        <rect x="354" y="26" fill="none" stroke="#88CE02" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="103" height="103" id="rect" />
                        <polyline fill="none" stroke="#88CE02" stroke-width="4" stroke-miterlimit="10" points="536.1,129 487.3,74.2 536.1,26 "/>
                    </svg>
                </div>
            </section>
        </div>
    )
}

export default Home;