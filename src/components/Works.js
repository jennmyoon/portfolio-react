import React from "react";
import ProjectCard from "./ProjectCard";
import PixelMock from "../images/Pixel-Mockup.png";
import ArtemisMock from "../images/Artemis-Mockup.png"; 
import WorldMock from "../images/jennsworld-mockup.png";
import '../styles/Works.css'; 
import placeHold from '../images/placeholder1.png'; 
import { Link } from "react-router-dom";


function Works() {
    return(
       <>
        <div className="works--wrapper" id="worksWrap">
            <div className="works--content">
                <div className="worksTitle" >
                    WORKS ! 
                </div>
                <Link to='/p!xel'>
                    <ProjectCard 
                        img = {PixelMock}
                        title = "P!XL"
                        label= "ReactJs | HTML/CSS | UX/UI"
                        des = "Explore a dynamic React.js pixel art project, enabling users to fill their canvas with pixel-perfect creations. Save and showcase your artwork in a personalized, locally stored gallery"
                    /> 
                </Link>
                <Link to='/Artemis'>
                    <ProjectCard 
                        img = {ArtemisMock}
                        title = "ART/EMIS"
                        label= "UX/UI | Product Design | Product Management"
                        des = "Artemis is an intersectional creative community that develops a space for students at USC to explore and express intersectional feminism through creative work"
                    />
                </Link>
                <Link to='/jennsWorld'>
                    <ProjectCard 
                        img = {WorldMock}
                        title = "JENN'S WORLD"
                        label= "ReactJs| HTML/CSS | UX/UI | Product Design | Personal Branding"
                        des = "The near impossible task of recreating everything in my brain onto a single webpage
                                + ( many many many redos until I got it right ) :D" 
                    />
                </Link>
            </div>
        </div>
       </>
    )
}

export default Works; 