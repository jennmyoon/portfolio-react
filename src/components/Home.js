import React from "react";
import '../styles/Home.css'

function Home() {
    return(
       <>
        <div className="home-wrap" id="homeWrap">
            <div className="home--content">
                <div className="home-title">
                JENN YOON <span className="icons">✧</span>
                </div>
                <div className="descriptor">
                CogSci & Web Development @ USC<span className="icons"> ☆ </span>
                UX/UI Designer<span className="icons"> ☆ </span>Front-end Developer 
                </div>

            </div>
            {/* <div className="home--content2">
                <div className="firstName">
                    JENN
                </div>
                <div className="lastName">
                    YOON
                </div>
            </div> */}
        </div>
       </>
    )
}

export default Home; 