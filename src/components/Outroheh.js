import React, {useState} from "react";
import '../styles/outro.css';
import '../styles/footer.css';



function Outro() {
    const [isHovered, setisHovered] = useState(false); 
    return(
        <div className="outro--wrapper" id="outroWrap">
                <div className="outro--content">
                    <div className={`outro--slide ${isHovered ? "hovered": "" }`}
                        onMouseEnter={() => setisHovered(true)}
                        onMouseLeave={()=> setisHovered(false)}
                    >
                        <div className="slide">
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com<span>↗</span></a>
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                        </div>
                        <div className="slide slide2" aria-hidden = "true">
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                            <a className="moving" target="_blank" href="mailto:jenniferminahyoon@gmail.com" >jenniferminahyoon@gmail.com <span>↗</span></a>
                        </div>
                    </div>
                    <div className="outro--text">
                    . . . HEY I'M ALWAYS READY TO PLAY!
                    </div>
                    <div className="footer--wrapper">
                        <div className="footer-links">
                            <div className="linkedin">
                                <span className="footer-star">✧</span> <a href="https://www.linkedin.com/in/jennifer-yoon-649669200/" target="_blank"> LINKEDIN </a>
                            </div>
                            <div className="linkedin">
                                <span className="footer-star">✧</span><a target="_blank" href="mailto:jmyoon@usc.edu" > jmyoon@usc.edu</a>
                            </div>
                        </div>
                        {/* <div className="footer-links">
                            <div className="linkedin">
                                <span className="footer-star">✧</span> <a href="https://www.linkedin.com/in/jennifer-yoon-649669200/" target="_blank"> LINKEDIN </a>
                            </div>
                            <div className="linkedin">
                                <span className="footer-star">✧</span><a target="_blank" href="mailto:jmyoon@usc.edu" > jmyoon@usc.edu</a>
                            </div>
                        </div> */}
                    </div>
                </div> 
        </div>
    );
}

export default Outro; 