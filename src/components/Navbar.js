import React from "react";
import '../styles/NavBar.css'; 

function NavBar(props) {
    const scrollPos = props.scrollPosition; 
    var viewport = window.innerWidth || document.documentElement.clientWidth; 

    const navStyles = {
        position: "fixed", 
        top: scrollPos < 800 ? "-60px" : 0, 
        transition : "top 0.3s" , 
    }
    const navStylestwo = {
        position: "fixed", 
        top: scrollPos < 40 ? "-60px" : 0, 
        transition : "top 0.3s" , 
    }

    const handleClick = (event) => {
        event.preventDefault();

        const target = event.target.getAttribute("href"); 
        const element = document.querySelector(target);

        if(element) {
            const topNum = element.offsetTop - 62; 
            window.scrollTo({
                top: topNum, 
                behavior:"smooth",
            });
        }
        
    };

    return(
       <>
        <div className="nav-wrapper" style={viewport > 400 ? navStyles : navStylestwo}>
            <div className="navLeft">
                <a href="#homeWrap" className="links" onClick={handleClick} >
                    JENN YOON
                </a>

            </div>
            <div className="navRight">
                <div className="navbtn">
                    <a href="#worksWrap" className="links" onClick={handleClick} >
                    WORKS
                    </a>
                </div>
                <div className="navbtn">
                    <a href="#aboutWrap" className="links" onClick={handleClick} >
                        ABOUT
                    </a>
                </div>
                <div className="navbtn">
                    <a href="#outroWrap" className="links" onClick={handleClick} >
                        CONTACT
                    </a>
                </div>
                <div className="navbtn">
                    RESUME
                </div>
            </div>
        </div>
       </>
    )
}

export default NavBar; 