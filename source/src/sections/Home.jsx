import React from 'react'
import './Portfolio.scss'
import { MdDownload } from "react-icons/md";
import { FaLinkedin,FaGithub,FaBehance,FaFacebook,FaInstagram } from "react-icons/fa";
import { Profile,CV } from '../assets/assets';
import { HiCodeBracketSquare } from "react-icons/hi2";
import { PiBracketsCurlyFill } from "react-icons/pi";
import { FaJsSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion, scale } from 'framer-motion'

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring" ,stiffness: 100, duration: 4 }}
          className="hero">
            <h2>Hello, I am</h2>
            <motion.h1
           >Navindu Ramanayaka</motion.h1>
            <h3>
              <span style={{"--i":4}} data-text="Full Stack Developer">Full Stack Developer</span>

              <span style={{"--i":3}} data-text="Frontend Developer">Frontend Developer</span>

              <span style={{"--i":2}} data-text="Backend Developer">Backend Developer</span>

              <span style={{"--i":1}} data-text="UI & UX Designer">UI & UX Designer</span>

              </h3>
            <p>Passionate Web Developer with a strong passion for building efficient and innovative solutions. I thrive in collaborative environments, enjoy tackling challenges and continuously strive to learn and grow.</p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/navindu-ramanayaka-125082303" target="_blank" rel="noopener noreferrer"><FaLinkedin className='s-icon' /></a>
              <a href="https://github.com/NavinduR2001" target="_blank" rel="noopener noreferrer"><FaGithub className='s-icon' /></a>
              <a href="https://www.behance.net/navinduramanayaka" target="_blank" rel="noopener noreferrer"><FaBehance className='s-icon' /></a>
              <a href="https://web.facebook.com/navindu.ramanayaka" target="_blank" rel="noopener noreferrer"><FaFacebook className='s-icon' /></a>
              <a href="https://www.instagram.com/navindu_rama" target="_blank" rel="noopener noreferrer"><FaInstagram className='s-icon' /></a>
            </div>
            <div className="button-section">
              <motion.a
              href={CV} 
              download="Navindu_Ramanayaka_CV.pdf"
              whileHover={{scale:1.1}}
              whileTap={{scale:0.8}}
              transition={{duration:0.3}}
               className="btn-fill">Download CV<MdDownload className='download' /></motion.a>
             <motion.a
              whileHover={{scale:1.1, background: 'linear-gradient(135deg, #9F2AFF, #6a00ff)', color: '#fff', borderColor: 'transparent'}}
              whileTap={{scale:0.8}}
              transition={{duration:0.3}}
               href="#contact" className="btn-unfill">Hire Me !</motion.a>
            </div>


        </motion.div>

       <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring" ,stiffness: 100, duration: 4 }}
          whileHover={{ scale: 1.02 }}
       
       className="hero-image">
        <div className="img-wraper">
         <img src={Profile} alt="Profile" />
         
         </div>
         {/* <HiCodeBracketSquare className='dev-icon bracket' />
         <PiBracketsCurlyFill className='dev-icon curly' />
         
          <RiCodeBoxFill  className='dev-icon hash' />
           <FaJsSquare className='dev-icon js' />
          <SiNextdotjs className='dev-icon next' />
          <FaNodeJs className='dev-icon node' />
          <FaReact className='dev-icon react' />
         
          <FaGitAlt className='dev-icon git' /> */}
         </motion.div>

      </div>
      
      
    </div>
  )
}

export default Home