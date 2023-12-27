import Home from "./Home";
import React, {useEffect, useNavigate} from "react";
import { Link } from "react-router-dom";
import '../styles/project.css'; 
import PrjNav from "./prjNav";
import github from '../images/GitHub_Logo.png';
import PixelBody from "../pages/pixelBody";

function ProjectSummary(props){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.page]);

    console.log(props.page)
    return(
        <div className="prj1--wrapper" id="homeTwo">
            <PrjNav
                color = {props.color}
                next = {props.next}
            />
            <img className="prj-header" src={props.img}></img>
            <div className="prj-preview">
                <div className="prj-left">
                    <div className="prj-title">
                        {props.title}
                    </div>
                    <div className="prj-summary">
                        {props.description}
                    </div>
                </div>
                <div className="prj-right">
                    <div className="prj-top">
                        <div className="top-left">
                            <div className="prj-role">
                                <div className="prj-stitle">
                                    Role
                                </div>
                                <div className="prj-caption">
                                    {props.role}
                                </div>
                            </div>
                            <div className="prj-role">
                                <div className="prj-stitle">
                                    Timeline
                                </div>
                                <div className="prj-caption">
                                    {props.timeline}
                                </div>
                            </div>
                        </div>
                        <div className="top-right">
                            <div className="prj-role">
                                <div className="prj-stitle">
                                    Tools
                                </div>
                                <div className="prj-caption">
                                    {props.tools}
                                </div>
                            </div>
                            <div className="prj-role">
                                {props.prjLink ? (
                                    <div className="prj-stitle">
                                        <a className="prjLink" href={props.prjLink} target="_blank" style={{color: props.color}}>WEBSITE DEMO →</a>
                                    </div>
                                ) : null}
                                {props.github ? (
                                    <div className="prj-caption"> 
                                        <a href={props.github} target="_blank">
                                            <img className="githublogo" src={github}></img>
                                        </a> 
                                    </div>

                                ) : null}
                            </div>
                           
                        </div>
                    </div>
                    <div className="bottom-left">
                        <div className="prj-stitle">
                            Project
                        </div>
                        <div className="prj-caption">
                            {props.prj}
                        </div>
                        <div className="prj-cta" style={{backgroundColor: props.color}}>
                        ↓ if you are curious about the process keep scrolling 🙈 ↓
                        </div>
                    </div>
                </div>
            </div>
            {props.page && 
            <props.page 
                color={props.color}
            />}
            <PrjNav
                color={props.color}
                next={props.next}
                style={{ backgroundColor: props.color }}
            />
        </div>
    )
} export default ProjectSummary; 