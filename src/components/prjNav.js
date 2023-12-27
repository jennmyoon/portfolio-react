import React from "react";
import { Link} from "react-router-dom";
import '../styles/project.css'

function PrjNav(props){


    return(
        <div className="prjNav" id="prjNav">
            
                <Link to= '/' style={{color: "black"}}>
                ← HOME
                </Link>
                {props.next &&            
                <Link 
                    to={`/${props.next}`} style ={{color: props.color, fontWeight: "bold"}}
                    className="nextLink"
                >
                {props.next} →
                </Link>
                }
        </div>
    )
} 
export default PrjNav; 
