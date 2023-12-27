import logo from './logo.svg';
import React, { useState, useEffect, useCallback } from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'; 
import About from './components/About'; 
import Works from './components/Works'; 
import NavBar from './components/Navbar';
import PreScroll from './components/preScroll';
import Outro from './components/Outroheh';
import pixelBody from './pages/pixelBody'; 
import projectSummary from './components/projectSummary';

function Main() {
  const colorThemes = [
    //blue
    {
      "--body_bground":"#EDEDE6", 
      "--main_text": "#697FA9",  
      '--card_color':'#697FA9',
      '--accent_color': '#001341',
    },
    //pink&red
    {
      "--body_bground":"#FCF6F6", 
      "--main_text": "#990112", 
      '--card_color':'#990112',
      "--accent_color" :"#F7C5CB"
    },
    //orange and black
    {
      '--body_bground': '#EFEFEF',  
      '--main_text': '#000000',
      '--card_color': 'white',
      '--secondary_text': 'black',
      '--accent_color': 'orange',
    },
    {
      "--body_bground":"#FAF7ED", 
      "--main_text": "#424B4F", 
      "--card_color":"#424B4F",
      "--accent_color" :"#C5C93F", 
      '--secondary_text': '#FFFDF3',
    }, 
    {
      "--body_bground" : "#1c1c1c", 
      "--main_text":"white", 
      "--accent_color":"#62FF87",
      "--card_color":"#373737",

    }
    
  ]; 

  const storedThemeIndex = parseInt(localStorage.getItem('themeIndex')) || 0; 
  const [currThemeIndex, setThemeIndex ] = useState(storedThemeIndex);
  const currentTheme = colorThemes[currThemeIndex]; 

  const handleThemeChange = useCallback((event)=>{
      const itemClicked = event.target; 

    const wasNavClicked = itemClicked.closest(".nav-wrapper"); 

    if(!wasNavClicked){
      setThemeIndex((prevIndex) => (prevIndex + 1) % colorThemes.length); 
    }
  }, [setThemeIndex, colorThemes.length]); 

  useEffect(() => {
    window.addEventListener("click", handleThemeChange); 

    return () => {
      window.removeEventListener("click", handleThemeChange); 
    }
  },[handleThemeChange])

  //getting scroll position 

  useEffect(() => {
    localStorage.setItem('themeIndex', currThemeIndex.toString()); 

  }, [currThemeIndex])
  
  const [scrollPos, setScrollPos] = useState(0); 

  const handleChangeScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  
  useEffect(() => {

    window.addEventListener("scroll", handleChangeScroll); 
    console.log(scrollPos); 

    return () => {
      window.removeEventListener("scroll",handleChangeScroll); 
    }
  }, [scrollPos]);
  var viewport = window.innerWidth || document.documentElement.clientWidth; 



  return (

        <div className="App" style={currentTheme}>
          {viewport > 401 ? 
          <PreScroll scrollPosition = {scrollPos}/> : null
          }
          <NavBar scrollPosition = {scrollPos}/>
          <Home/>
          <Works/>
          <About/>
          <Outro/>
        </div>

  );
}

export default Main;
