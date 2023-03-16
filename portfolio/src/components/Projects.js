import React, { useState, useLayoutEffect } from "react";
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

    //anim project border
  useLayoutEffect(() => {
    let animBorder = gsap.timeline();

    animBorder
    .from(".project", {
        boxShadow: "0px 0px 10px #424141",
        borderRadius: '10%',
        ease: "elastic",
        yoyo: true
    })
    .to(".project", {
      keyframes: {
        boxShadow: ["0px 0px 10px #424141", "0px 0px 15px #e2bd1a", "0px 0px 20px #29f176", "0px 0px 20px rgb(41, 128, 241)", "0px 0px 15px #c418bb", "0px 0px 10px #424141"],
      },
      repeat: -1,
      duration: 10,
    })
  }, [])

    return(
        <div className="cards-container">
            <ExternalLink href="https://expatjournal3.netlify.app/" className="project-link">
                <div className="project project-1">  
                    <img src={ExpatJournal} />  
                    <span>Expat Journal</span>
                    <p>This is a project I worked on with a group at the coding bootcamp I partook in. We were to build a webapp that allows expats to connect to each other and share their travelling stories.</p>
                </div>
            </ExternalLink>
            <ExternalLink href="https://hajjar-associates-remake.vercel.app/" className="project-link">
                <div className="project project-1">  
                    <img src={HajjarAssociatesRemake} />  
                    <span>Hajjar Associates Remake</span>
                    <p>Here is a website I created for a friend of mine's company. It was left unfinished but is a demonstration of what I am capable of achieving with React.</p>
                </div>
            </ExternalLink>
            <ExternalLink href="https://xtrades-challenge.vercel.app/" className="project-link">
                <div className="project project-1">  
                    <img src={Xtrades} />  
                    <span>X-trades 24 hour challenge</span>
                    <p>In this project, I was to create a stock exchange UI within 24 hours to the best of my ability. It was an interview coding test that shows what I am capable of doing in a fast paced environment.</p>
                </div>
            </ExternalLink>
            <ExternalLink href="https://metaverse-chiku524.vercel.app/" className="project-link">
                <div className="project project-1">  
                    <img src={Metaverse} />  
                    <span>Metaverse</span>
                    <p>This is a freelance project I started for a gaming group of people who wanted to build a metaverse. They abandoned the project as I was working on it but it was great experience nonetheless.</p>
                </div>
            </ExternalLink>
            <ExternalLink href="https://portfolio-site-chiku524.vercel.app/" className="project-link">
                <div className="project project-1">  
                    <img src={AnimationsSite} />  
                    <span>Animations Site</span>
                </div>
            </ExternalLink>
            <ExternalLink href="https://expatjournal3.netlify.app/" className="project-link">
                <div className="project project-1">  
                    <img src={ExpatJournal} />  
                    <span>Expat Journal</span>
                </div>
            </ExternalLink>
            <ExternalLink href="https://expatjournal3.netlify.app/" className="project-link">
                <div className="project project-1">  
                    <img src={ExpatJournal} />  
                    <span>Expat Journal</span>
                </div>
            </ExternalLink>
            <ExternalLink href="https://expatjournal3.netlify.app/" className="project-link">
                <div className="project project-1">  
                    <img src={ExpatJournal} />  
                    <span>Expat Journal</span>
                </div>
            </ExternalLink>
        </div>
    )
}

export default Projects;





