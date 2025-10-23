import React from 'react'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';



function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
      document.querySelector('.slidebar-container').style.display = 'block';
    }else{
      document.querySelector('.slidebar-container').style.display = 'none';
    }
  }

  return (
    <div className="navbar">
      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration:1}} className="navbar-logo">.navindu</motion.div>
      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{duration:1}} className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>        
      </motion.div>

      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration:2}} className="slidebar-container">

         <ul className="slidebar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{duration:1}} className="contact-button">
        <a href="#contact">Contact</a>
      </motion.div>
      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration:1}} className="menu-logo" onClick={toggleMenu}><IoMenu /></motion.div>
    </div>
  )
}

export default Navbar