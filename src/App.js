import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ProjectSummary from './components/projectSummary';
import Main from './Main';
import Home from './components/Home';
import PixelHead from './images/pixel_header.png';
import JennWorldHead from './images/jenworld-header.png'; 
import ArtemisHead from './images/ArtemisHead.png';
import Works from './components/Works';
import PixelBody from './pages/pixelBody';
import ArtemisBody from './pages/artemisBody';
import JennsWorldBody from './pages/jennsWorldBody';


function App() {
  return (
    <Router restoreScroll={false}>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/p!xel' element={
          <ProjectSummary 
            img = {PixelHead}
            title = 'P!XL'
            description = "A React.js-powered web app with a retro aesthetic, inviting you to rediscover your inner child through nostalgic pixel art."
            role = "Product Designer | Developer"
            timeline = "72hr project challenge"
            tools="Figma | HTML | CSS | React.js"
            color = "#FFA587"
            next = "Artemis"
            prj = "Sparked by pixel art on Behance, I decided to dive into a personal project. The goal? Understand and master React.js functions while creating a lighthearted and fun website for users to enjoy. "
            page = {PixelBody}
            github = "https://github.com/jennmyoon/pixel"
            prjLink = "https://jennmyoon.github.io/pixel/" 
          />
        } />
          <Route path ='/Artemis' element = {
           <ProjectSummary
             img = {ArtemisHead}
             title = "ARTEMIS"
             description="Website Redesign for ARTEMIS, an intersectional, multi-media student-organization at USC"
             page = {ArtemisBody}
             role  = "UX/UI Design | Developer"
             prj = "Elevate the presence of ARTEMIS's personal identity on their website, 
             implementing changes that not only improves user interaction but also enhances usability. 
             Foster a strong User Experience design that encourages engagement and 
             makes the website more user-friendly, compelling users to refer to it for information about ARTEMIS."
             timeline= "Feb 2023 - March 2023"
             tools = "Figma | Notion | WebFlow"
             color = "#F35844"
             next = "jennsWorld"
           />
         }/>
        <Route path ='/jennsWorld' element = {
          <ProjectSummary
            img = {JennWorldHead}
            title = "jennsWorld"
            description="A glimpse into my creative works and progress as a Designer and Developer, 
            carefully crafted to encapsulate my own personal charms and passions!"
            page = {JennsWorldBody}
            role  = "Developer | UX/UI Design | Product Designer"
            timeline= "May 2023 - PRESENT"
            tools = "Figma | HTML | CSS | React.js | Javascript"
            color="#687EA9"
            prj = "The journey to figure out the perfect design that encapsulates what is 
            running through my head, hence the name Jenn's World :D"
            prjLink = "/"
          />
        }/>
      </Routes>

    </Router>
  );
}

export default App;
