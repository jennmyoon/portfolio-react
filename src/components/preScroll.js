import React, { useState, useEffect } from "react";
import '../styles/PreScroll.css'

function PreScroll(props) {
    const scrollPos = props.scrollPosition; 
    // things to consider 
    // you could also just have it translate over a certain amount of time so users can scroll past 
    // if they didnt want to watch the whole thing
    const wordOne = ['PLAY', 'SLEEP', 'CREATE', 'SLAY']; 
    const wordTwo = ['EXPLORE', 'LEARN', 'GROW', 'PLAY', 'CODE']; 
    const wordThree = ['EAT', 'DESIGN', 'PLAY', 'DEFY', 'CHALLENGE']; 
    const wordFour = ['INNOVATE', 'PLAY', 'CRAFT', 'COLLABORATE', 'TALK']; 
    
    const [word, setWord] = useState(wordOne[0]); 
    const [secondWord, setSecondWord] = useState(wordTwo[0]); 
    const [thirdWord, setThirdWord] = useState(wordThree[0]); 
    const [fourthWord, setFourthWord] = useState(wordFour[0]); 
    //slide in on load animation
    const[isVisible, setIsVisible] = useState(false); 

    //does it once on load
    useEffect(() => {
        setIsVisible(true); 
    },[]);

    useEffect(() => {
        let index = 0; 
        let indexTwo = 0; 
        let indexThree = 0; 
        let indexFour = 0; 
        const interval = setInterval(()=>{
            setWord(wordOne[index]);

            index = (index+1) % wordOne.length; 
        }, 1850)
        const intervalTwo = setInterval(()=>{
            setSecondWord(wordTwo[indexTwo]); 

            indexTwo = (indexTwo+1) % wordTwo.length; 
        }, 1500)
        const intervalThree = setInterval(()=>{
            setThirdWord(wordThree[indexThree]); 

            indexThree = (indexThree+1) % wordThree.length; 
        }, 2030)
        const intervalFourth= setInterval(()=>{
            setFourthWord(wordFour[indexFour]); 

            indexFour= (indexFour+1) % wordThree.length; 
        }, 2200)
        

        return () => {
            clearInterval(interval); 
            clearInterval(intervalTwo); 
            clearInterval(intervalThree);
            clearInterval(intervalFourth);
        }; 
    },[])

    const stylePre = (word) => ({
        color : word === 'PLAY' ? 'var(--accent_color)' : 'var(--main_text)', 
        
    })

    const styleBorder = (word) => ({
        color : word === 'PLAY' ? 'var(--accent_color)' : 'var(--main_text)', 
        backgroundColor: (word === 'PLAY') ? 'var(--main_text)' : 'var(--accent_color)'
        
    })




    const titlestyle ={
        opacity : scrollPos > 1000 ? 0 : 1,
        transition: 'opacity 0.5s ease'
    };

  


    // const wrapperStyle = {
    //     position: scrollPos > 776 ? "absolute" : "relative", 
    // }


    
    return(
        <div className="PreScroll-wrapper" >
            <div className="landing--words">
                <div className={`ps-title ${isVisible ? 'visible' : 'hidden'}`} style={titlestyle}>
                    <span className="ps-header">jenn likes to... </span> <br/>
                    <div className="ps-wordBank">
                        <div className="wb-rowOne">
                            <span className="wordOne"style={styleBorder(word)}>{word}</span> 
                            <span className="wordTwo"style={stylePre(secondWord, 2)}> <span>✦</span> {secondWord} <span>✦</span></span>
                            <span className="wordThree"style={styleBorder(thirdWord)}>{thirdWord} </span>
                            <span className="wordTwo"style={stylePre(fourthWord, 2)}> <span>✦</span> {fourthWord} <span>✦</span></span>

                        </div>
                        <div className="wb-rowTwo">
                            <span>✦</span>
                            <span className="r2-wordTwo"style={stylePre(secondWord, 2)}>{secondWord}</span>
                            <span className="r2-wordThree"style={styleBorder(fourthWord)}>{fourthWord} </span>
                            <span className="r2-wordOne"style={stylePre(word)}>{word}</span> 
                            <span className="r2-wordOne"style={stylePre(thirdWord)}>{thirdWord}</span> 
                            <span>✦</span>
                        </div>
                        <div className="wb-rowThree">
                            <span className="r3-wordThree"style={stylePre(thirdWord)}>{thirdWord} </span>
                            <span className="r3-star">✦</span><span className="r3-star">✦</span>
                            <span className="r3-wordOne"style={stylePre(word)}>{word}</span>
                            <span className="r3-star">✦</span><span className="r3-star">✦</span>
                            <span className="r3-wordOne"style={stylePre(fourthWord)}>{fourthWord}</span>  
                            <span className="r3-star">✦</span><span className="r3-star">✦</span>
                            <span className="r3-wordTwo"style={stylePre(secondWord, 2)}>{secondWord}</span>
                        </div>                       
                    </div>
                </div>
            </div>
            <div className="scroll-w">
                <div className="scroll">
                    <span>SCROLL →&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div className="scroll scroll2" aria-hidden="true">
                    <span>SCROLL →&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
       </div>
    )
}

export default PreScroll; 