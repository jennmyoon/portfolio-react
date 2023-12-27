import React, {useEffect, useState} from "react";
import '../styles/About.css';
import Cartoonpic from '../images/cartoon.png'; 
import Realpic from '../images/profile.png';
import EggMenu from '../images/egg.JPG';

function About() {


    return(
        <div className="about--wrap" id="aboutWrap">
            <div className="about--content">
                <div className="left-about">
                    <div className="profilepic">
                        <img src= {Realpic} className="realpic" style={{}}></img>
                        <img src= {Cartoonpic} className="cartoonpic"></img>
                    </div>
                    <div className="about--title">
                      👋 IM JENN!
                    </div>
                    <div className="about-subtitle one">
                        Developer & Designer 
                    </div>
                    <div className="about-subtitle">
                        Junior at USC studying Cognitive Science & Web Development
                    </div>
                </div>
                <div className="right-about">
                    <div className="description">
                        <span>TLDR: </span>Fell in LOVE with design and coding one friday evening after getting locked out 
                        of my dorm. Crashed at my friends house who 
                        decided our pre-sleep activity would be to teach me the basics of HTML and CSS in 
                        30 minutes. HAHA is it too corny to say, since then is history? Well, since then
                        my relentless curiosity to create visually appealing and seamlessly 
                        functional digital experiences has only continued to grow.  <br/><br/>
                        The result of that night, and the spark that started me down the rabbit hole: 
                    </div>
                    <img src={EggMenu} className="egg-menu"></img>
                </div>
            </div>
        </div>
    )
}

export default About; 