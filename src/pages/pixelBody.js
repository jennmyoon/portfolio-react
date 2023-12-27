import React, { useEffect } from "react";
import '../styles/pixelBody.css'; 
import Pixelv1 from '../images/pixelv1.png';
import Pixelissues from '../images/pixel-issues.png';
import Wireframe from '../images/pixel-wireframe.png';
import Excelorate from '../images/Excelorate.png';
import Yapari from '../images/Yapari.png';

function PixelBody(props){

    
    
    useEffect(() => {
        var pixelSub = document.querySelectorAll('.pixel-subtitle'); 
        const changeColor = () => {
            pixelSub.forEach(subtitle => {
                subtitle.style.color = props.color
            });
        };
        changeColor();
    }, [props.color]);
    return(
        <div className="pixelBody--wrap">
            <div className="pixelsection s1">
                <div className="pixel-subtitle" style={{color:props.color}}>
                    FIRST RENDITION
                </div>
                <div className="section-bottom">
                    <div className="pixel-des">
                    In my initial exploration of React, I encountered challenges due to my 
                    limited understanding of fundamental concepts like Hooks, 
                    Components, Props, and more. This lack of familiarity resulted in various issues with the first version of P!XEL.
                    </div>
                    {/* <img src={Pixelv1} className="pixelv1"/> */}
                </div>
            </div>
            <div className="pixelsection s2">
                <div className="pixel-subtitle">
                    PROBLEMS & SOLUTIONS
                </div>
                <div className="section-bottom">
                    <img src={Pixelissues} className="pixelv1"/>
                    <div className="pixel-des issues">
                        <ol>
                            <li>
                                NON-RESPONSIVE DESIGN
                            </li>
                            <div className="issue-des">
                                <ul>
                                    <li>
                                        <span>PROBLEM: </span>When I attempted to make the saved canvas responsive to screen size (on the gallery page), 
                                        the drawings would distort/shift the pixels 
                                    </li>
                                    <li>
                                        <span>SOLUTION: </span>Replaced the grid component with the HTML 
                                        canvas element and useRef Hook, creating a more responsive canvas that adapts to different screen sizes.
                                        It also made it easier to save canvas elements between pages. 
                                    </li>
                                </ul>
                            </div>
                            <li>
                                CONFUSING UI / INEFFICIENT DATA RENDERING
                            </li>
                            <div className="issue-des">
                                <ul>
                                    <li>
                                        <span>PROBLEM: </span>The original drawing component operated using a fixed grid with hidden borders.
                                            Expanding the visible canvas for design cohesion resulted in issues for users trying to draw in 
                                            the extended 3rem margins, as their mouse movements weren't detected.
                                    </li>
                                    <li>
                                        <span>SOLUTION: </span> Transitioning to the HTML canvas element made the canvas responsive to screen size, addressing unproductive UI issues. 
                                        Leveraging useRef, useState, and useEffect hooks significantly improved data rendering, providing control over the rendering frequency and passing of elements between components and pages.
                                    </li>
                                </ul>
                            </div>
                            <li>
                                POOR USE OF SPACE
                            </li>
                            <div className="issue-des">
                                <ul>
                                    <li>
                                        <span>PROBLEM: </span> This page was... basically a waste of space and definitely because I was rushing to finish 🫣
                                    </li>
                                    <li>
                                        <span>SOLUTION: </span> Instead of allocating an entire page for instructions, I condensed the information into a pop-up modal-style walkthrough component. 
                                        Users can minimize and reopen it as needed, optimizing space utilization.
                                    </li>
                                </ul>
                            </div>
                            <li>
                                INCONSISTENT DESIGN ELEMENTS
                            </li>
                            <div className="issue-des">
                                <ul>
                                    <li>
                                        <span>PROBLEM: </span> Poor attention to small details.
                                    </li>
                                    <li>
                                        <span>SOLUTION: </span> Focused on refining design elements for a more consistent and polished appearance.
                                        Used tools such as Figma and Behance to better organize the design process. 
                                    </li>
                                </ul>
                            </div>
                            <li>
                                LACK OF FUNCTIONALITY
                            </li>
                            <div className="issue-des">
                                <ul>
                                    <li>
                                        <span>PROBLEM: </span> Basic functionality limited to drawing or starting over.
                                    </li>
                                    <li>
                                        <span>SOLUTION: </span> Learned how to optimize React Hooks and Components to enhance functionality, 
                                        allowing users to switch between the pen, eraser, paint bucket, and clear tool. 
                                        This provided a more versatile and feature-rich experience. 
                                    </li>
                                </ul>                                
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="pixelsection s1">
                <div className="pixel-subtitle">
                    FINAL RENDITION
                </div>
                <div className="section-bottom">
                    <div className="pixel-des">
                    With the above tweaks, came the final rendition of P!XEL!
                    </div>
                    {/* <img src={Pixelv1} className="pixelv1"/> */}
                </div>
            </div>
            <div className="pixelDesign">
                <div className="design-title">
                    DESIGN SYSTEM 
                </div>
                <div className="design-subtitle">
                ✨v2.0 WIREFRAME, COLOR PALETTE, MOOD BOARD, CUSTOM ICONS, TYPOGRAPHY✨
                </div>
                <div className="process-body">
                    <div className="pix-sub one">
                        <img className="pix-wframe" src={Wireframe}/>
                    </div>
                    <div className="pix-sub two">
                        <div className="font-box">
                            <div className="font-des">
                                HEADER / EXCELORATE REGULAR
                            </div>
                            <img className="font-pic" src={Excelorate}/>
                        </div>
                        <div className="font-box">
                            <div className="font-des">
                                BODY / YAPARI TRIAL REGULAR
                            </div>
                            <img className="font-pic two" src={Yapari}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pixelsection s4">
                <div className="pixel-subtitle">
                    TAKEAWAYS
                </div>
                <div className="section-bottom">
                    <div className="pixel-des"> 
                        Overall, this was a really fun project. 
                        It marked one of my initial ventures into independent problem-solving, 
                        without the use of tutorials or online guides. Navigating through numerous 
                        dead ends fostered a stronger grasp of problem-solving and 
                        logical thinking. Starting from scratch allowed me to genuinely 
                        build a robust foundation in using React, enhancing my proficiency in 
                        HTML, JavaScript, and even CSS. SLAY!
                    </div>
                    {/* <img src={Pixelv1} className="pixelv1"/> */}
                </div>
            </div>
        </div>
    )

}

export default PixelBody; 