import React, { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as ArrowIcon } from "../images/arrow-icon.svg";
import '../css/page2.css';

const Page3 = () => {

    gsap.registerPlugin(ScrollTrigger);

    return(
        <div className="page-3">
            <div className='contact-container'>
                <p className="explanation">Here is a cool animation that shows what I am capable of using DOM manipulation.</p>
                <p className="blurb">All of this is built using React.js, JavaScript and CSS. Feel free to play with the bubbles using your mouse.</p>
                <p className="contact-next">For my contact info, please click here to go to the next page!</p>
            </div>
        </div>
    )
}

export default Page3;