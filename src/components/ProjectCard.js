import React from "react";
import '../styles/ProjectCard.css'; 


function ProjectCard(props) {

    return(
        <div className="card--wrapper">
            <div className="card--content">
                <div className="card--des">
                    <div className="card--title card-words">
                        {props.title}
                    </div>
                    <div className="prj--des">
                        <div className="prj--label card-words">
                            {props.label}
                        </div>
                        <div className="prj--summar card-words">
                            {props.des}
                        </div>
                    </div>
                </div>
                <div className="img--class">
                    <img className="prj-image" src= {props.img} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard; 