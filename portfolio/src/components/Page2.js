import React, { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as ArrowIcon } from "../images/arrow-icon.svg";
import '../css/page2.css';

const Page2 = () => {
    const [bubArray, setBubArray] = useState([]);

    gsap.registerPlugin(ScrollTrigger);

    for(let i=0; i<100; i++) {
        bubArray.push(i);
      }
    
      useLayoutEffect(() => {
        bubArray.forEach(el => {
          gsap.set(`.bubble-${el}`, {
            x: "random(0, 2000)",
            y: "random(0, 2000)",
          })
        })
      }, [])
    
      useEffect(() => {
        let bubbles = document.querySelectorAll(".bubble");
        let tank = document.querySelector(".tank");
        var xMove;
        var yMove;
        
        const getMovement = (e) => {
          xMove = e.movementX;
          yMove = e.movementY;   
        }
    
        const moveBubble = (e, idx, xMove, yMove) => {;
          let xMoveDupe = xMove * 10;
          let yMoveDupe = yMove * 10;
    
          gsap.to(`.bubble-${idx}`, {
            x: `+=${xMoveDupe}`,
            y: `+=${yMoveDupe}`,
            duration: 2
          })
        }
          
        tank.addEventListener('mousemove', (e) => getMovement(e));
        bubbles.forEach((el, idx) => el.addEventListener("mouseenter", (e) => moveBubble(e, idx, xMove, yMove)));
        
      }, [])

      useLayoutEffect(() => {
        let nextButton = document.querySelector(".next-btn");
        let contactNext = document.querySelector(".contact-next");
        let svgContainer = document.querySelector(".next-btn .svg-container");
        
        gsap.set(svgContainer, {display: "none", scale: 0, transformOrigin: "50% 50%"});

        nextButton.addEventListener("mouseenter", () => {
            gsap.to(contactNext, {transformOrigin: "50% 50%", scaleX: 0, display: "none"});
            gsap.to(svgContainer, {display: "block", scale: 1, duration: 1});
        })
        nextButton.addEventListener("mouseleave", () => {
            gsap.to(contactNext, {transformOrigin: "50% 50%", scale: 1, display: "block"})
            gsap.to(svgContainer, {display: "none", scale: 0})
        })
      }, [])

    return(
        <div className="page-2">
            <div className='tank-container'>
                <div className="tank">
                {bubArray ? bubArray.map((item, index) => <div key={index} className={`bubble bubble-${index}`} style={{width: index*1.3}}><div className='tint'></div> </div>) : console.log('didnt work')};
                </div>
                <p className="explanation">Here is a cool animation that shows what I am capable of using DOM manipulation.</p>
                <p className="blurb">All of this is built using React.js, JavaScript and CSS. Feel free to play with the bubbles using your mouse.</p>
                <div className="next-btn">
                    <p className="contact-next">For my contact info, please click here to go to the next page!</p>
                    <div className="svg-container">
                        <ArrowIcon className="arrow-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2;