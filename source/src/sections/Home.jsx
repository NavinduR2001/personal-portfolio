import React from 'react'
import './Portfolio.scss'
import { MdDownload } from "react-icons/md";
import { FaLinkedin,FaGithub,FaBehance,FaFacebook,FaInstagram } from "react-icons/fa";
import { Profile } from '../assets/assets';
import { HiCodeBracketSquare } from "react-icons/hi2";
import { PiBracketsCurlyFill } from "react-icons/pi";
import { FaJsSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">

        <div className="hero">
            <h2>Hello, I am</h2>
            <h1>Navindu Ramanayaka</h1>
            <h3>Full Stack Developer </h3>
            <p>Passionate Web Developer with a strong passion for building efficient and innovative solutions. I thrive in collaborative environments, enjoy tackling challenges and continuously strive to learn and grow.</p>
            <div className="social-icon">
              <FaLinkedin className='s-icon' />
              <FaGithub className='s-icon' />
              <FaBehance className='s-icon' />
              <FaFacebook className='s-icon' />
              <FaInstagram className='s-icon' />
            </div>
            <div className="button-section">
              <a href="#" className="btn-fill">Download CV<MdDownload className='download' /></a>
             <a href="#" className="btn-unfill">Hire Me !</a>
            </div>
         
           
        </div>

       <div className="hero-image">
        <div className="img-wraper">
         <img src={Profile} alt="Profile" /></div>
         <HiCodeBracketSquare className='dev-icon bracket' />
         <PiBracketsCurlyFill className='dev-icon curly' />
         
          <RiCodeBoxFill  className='dev-icon hash' />
          {/* <FaJsSquare />
          <SiNextdotjs />
          <FaNodeJs />
          <FaReact />
          <SiPhp /> */}
          <FaGitAlt className='dev-icon git' />
         </div>

      </div>
      
      
    </div>
  )
}

export default Home