import React from "react";
import '../styles/pixelBody.css'; 
import '../styles/artemisBody.css'; 
import origWebsite from '../images/artemis-originalweb.png';
import prosandcons from '../images/prosandcons.png';
import clientMood from '../images/client-moodboard.png';
import designSystem from '../images/designSystem.png';
import finalSytem from '../images/design system2.png'; 
import lowfidel from '../images/art-wireframe1.png';
import artmidfi from '../images/art-midfi.png';
import finalRendition from '../images/art-finalrendition.png';
function ArtemisBody(){

    return(
        <div className="artemisBody-wrapper">
            <div className="artsection s1">
                <div className="art-subtitle">
                    PROBLEM
                </div>
                <div className="section-bottom">
                    <div className="art-des">
                        ARTEMIS's existing website lacked a distinctive digital image or identity. Additionally, they sought a website redesign to enhance the organization's reach and engagement.
                    </div>
                        {/* <img src={Pixelv1} className="pixelv1"/> */}
                </div>
            </div>
            <div className="artsection s2">
                <div className="section-box objectives">
                    <div className="art-subtitle s2">
                        OBJECTIVES
                    </div>
                    <div className="section-bottom s2">
                        <div className="art-box b1">
                            <div className="des-title">
                                Improve functionality + UX/UI of the website
                            </div>
                            <div className="des-brief">
                                Get feedback from current and prospective ARTEMIS members to improve the UX/UI
                                in turn boosting site engagement. 
                            </div>
                        </div>
                        <div className="art-box b2">
                            <div className="des-title">
                                Create a creative brand identity
                            </div>
                            <div className="des-brief">
                                Implement consistent design choices that can represent ARTEMIS as a club, setting 
                                them apart from other student orgs. Design a new logo. 
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
            <div className="artsection s3">
                <div className="art-subtitle">
                    CLIENT BRIEF
                </div>
                <div className="section-bottom">
                    <div className="art-des">
                        When ARTEMIS first reached out about potentially working together for a redisign, my team and I 
                        crafted a set of questions to gain a better insight of their expectations. 
                        Subsequently, we conducted a meeting with the client, providing them with an opportunity 
                        to elaborate on their expectations and desires for the redesign. This collaborative approach 
                        ensured a comprehensive understanding of their vision and set the foundation for a tailored design process.
                    </div>
                    <div className="subHeading">
                    ✧ MAIN REQUESTS
                    </div>
                    <div className="client-notes">
                        <div className="note">
                            More Professional Image
                        </div>
                        <div className="note">
                            Maintain Artistic Authenticity
                        </div>
                        <div className="note">
                            Reach Wider Audience
                        </div>
                        <div className="note">
                            New Logo
                        </div>
                        <div className="note">
                            No Design Reference
                        </div>
                    </div>
                </div>
            </div>
            <div className="artsection s4">
                <div className="art-subtitle">
                    USER INTERVIEWS & DATA COLLECTION
                </div>
                <div className="section-bottom">
                    <div className="art-des">
                        Once we understood what our client wanted, it was now time to figure out what was not 
                        working for the current website and maybe find out a couple of things that were working effectively.
                        What better way than to ask the target audience DIRECTLY 🤷
                    </div>
                    <div className="stat-box">
                        <div className="stats b1">
                            <div className="stat-des">
                                <span>{"<10%"} </span>
                                of the members in ARTEMIS check the website at least once a month
                            </div>
                        </div>
                        <div className="stats b2">
                            <div className="stat-des">
                                <span>{"80%"} </span>
                                agree that the website inadequately reflects the 
                                organization's purpose and function.
                            </div>
                        </div>
                        <div className="stats b3">
                            <div className="stat-des">
                                <span>{"95%"}</span> find it difficult to navigate / find the information
                                they need for events, projects, applications, etc. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="artsection s5">
                <div className="design-title">
                    DESIGN PROCESS 
                </div>
                <div className="design-subtitle">
                ✨CRITIQUES, IDEATION, DESIGN SYSTEMS, WIREFRAMES, FINAL RENDITION✨
                </div>

                <div className="process-body">
                        <div className="design s1">
                            <div className="font-des">
                                ORIGINAL WEBSITE 
                            </div>
                            <img  className="orig-web" src={origWebsite}></img>
                        </div>
                        <div className="design s2">
                            <div className="font-des">
                                CRITIQUES & IDEATION
                            </div>
                            <div className="artdesign-des">
                              Leveraging insights from user interviews and our in-depth exploration of the original site,
                               my team and I compiled a list of primary critiques and potential solutions into one place. 
                            </div>
                            <img src={prosandcons} className="sticky-img"/>
                        </div>
                </div>
            </div>
            <div className="artsection s6">
                <div className="art-subtitle s6">
                ✧ DEVELOPING A DESIGN SYSTEM ✧
                </div>
                <div className="section-bottom">
                    <div className="art-des s6">
                    As a team, we individually generated ideas for a design system
                    for ARTEMIS, encompassing elements such as color scheme, typography, and a new logo.
                     These concepts were developed based on our individual in-depth exploration of the organization. 
                     Subsequently, we compiled our ideas/moodboards and presented them to the client for feedback.
                     <br/><br/>
                     What we presented : 
                    </div>
                    <div className="system-img">
                        <img src={clientMood} className="client-img" />
                        <img src={designSystem} className="client-img" />
                        <div className="img-label">
                         ⭐ indicates client preferences 
                        </div>
                    </div>
                    <div className="design s6">
                        <div className="font-des">
                            FINAL SYSTEM
                        </div>
                        <img  className="final-img" src={finalSytem}></img>
                    </div>
                </div>
            </div>
            <div className="artsection s7">
                <div className="design-title">
                    WIREFRAMES 
                </div>
                <div className="design-subtitle s7">
                ✨low-fidelity, mid-fidelity, FINAL :)✨
                </div>
                <div className="design wf">
                    <div className="font-des">
                        LOW-FIDELITY
                    </div>
                    <img src={lowfidel} className="wireframe low"/>
                </div>
                <div className="design wf">
                    <div className="font-des wf">
                        MID-FIDELITY
                    </div>
                    <img src={artmidfi} className="wireframe mid"/>
                </div>
            </div>
            <div className="artsection s1">
                <div className="art-subtitle">
                    NOTABLE EDITS
                </div>
                <div className="section-bottom">
                    <div className="art-des">
                        Throughout the redesign process, we remained mindful of the client's objectives
                        and goals. Our user interviews highlighted a shared sentiment among existing 
                        members - a perceived lack of clarity and purpose in the website. 
                        Users commonly cited difficulties in locating information or grappling with 
                        outdated content. The original design suffered from a lack of organization and poor information architecture (IA),
                        leading users to prefer inquiring directly rather than navigating the website. <br/><br/>

                        To tackle this, we revamped the page functions, ensuring fresh content on each page and 
                        introducing a dedicated hub for current and upcoming events. 
                        We also restructured the projects page, separating current and past projects for 
                        improved accessibility.  This redesign focused on enhancing the information architecture, 
                        providing users with a clearer and more organized pathway through the website.
                        <br/><br/>

                        To optimize the user journey, we strategically integrated additional links on each page. 
                        This intentional connectivity streamlines user navigation, ultimately contributing to enhanced 
                        retention rates. Furthermore, we implemented a responsive design that seamlessly transitions to 
                        mobile platforms. In contrast to the previous version, which was primarily readable on laptops or 
                        computers, 
                        the new design ensures the website is accessible on portable devices as well. <br/> <br/>

                        After careful consideration, experimenting with various designs, and holding multiple meetings with our client, we settled on the final designs. 
                        We then transferred our Figma files to a WebFlow webpage.               
                    
                    </div>
                        {/* <img src={Pixelv1} className="pixelv1"/> */}
                </div>
            </div>
            <div className="artsection s6">
                <div className="art-subtitle s6">
                ✧ FINAL DELIVERABLES ✧
                </div>
                <img src={finalRendition} className="final-wf"/>
                
            </div>
            <div className="artsection s8">
                <div className="art-subtitle">
                    TAKEAWAYS
                </div>
                <div className="section-bottom">
                    <div className="pixel-des"> 
                        YAY! With that my first client redesign project is concluded. Througout this project 
                        I was able to learn alot about the full design process. PRETTY DOESN'T ALWAYS MEAN 
                        FUNCTIONAL. It was important to remember that functionality has to go hand in hand
                        with the design. <br/><br/>

                        <span>Designing with Development in Mind:</span><br/>
                        As we approached the final steps of transferring the designs to Webflow, we 
                        encountered a challenge. Our team had to reevaluate certain design choices to 
                        ensure optimal functionality post-development.<br/><br/>

                        <span>Information Architecture:</span><br/>
                        This project really stressed the significance of Information Archiecture. 
                        How data is presented significantly influences its interpretation. 
                        We optimized the information architecture by enhancing the labeling system, 
                        organizational scheme, and overall data structure.<br/><br/>
                        <span>Harmonizing User Needs with Client Preferences:</span><br/>
                        Balancing user preferences with client expectations and requirements was a key aspect of this project. 
                        We skillfully took the collected data to tailor the website to user preferences while considering the client's expectations.
                         Negotiating design choices led to a harmonious outcome that satisfied everyone involved.
                    </div>
                    {/* <img src={Pixelv1} className="pixelv1"/> */}
                </div>
            </div>
            
            
                
        </div>
    )

}

export default ArtemisBody; 