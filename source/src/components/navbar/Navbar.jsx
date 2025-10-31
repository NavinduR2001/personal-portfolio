import React, { use } from 'react'
import { motion, scale } from 'framer-motion'
import './Navbar.scss'
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { Logo } from '../../assets/assets';



function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [active,setActive]= useState('home');


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects',  'certificate', 'contact'];
      const scrollPosition = window.scrollY + 100; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (section) => {
    setActive(section);
    setIsOpen(false); 
    document.querySelector('.slidebar-container').style.display = 'none';
  }

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
      
      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration:1}} className="navbar-logo">
        <img src={Logo} />
      </motion.div>

      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{duration:1}} className="navbar-links">
        <motion.a 
          className={active === 'home' ? 'active' : ''}
          transition={{duration:0.2}} 
          whileTap={{scale:0.6}} 
          whileHover={{scale:1.2, transition:{duration:0.2}}} 
          href="#home"
          onClick={() => handleMenuClick('home')}
        >
          Home
        </motion.a>
        <motion.a 
          className={active === 'about' ? 'active' : ''}
          transition={{duration:0.2}} 
          whileTap={{scale:0.6}} 
         whileHover={{scale:1.2, transition:{duration:0.2}}}
          href="#about"
          onClick={() => handleMenuClick('about')}
        >
          About
        </motion.a>
        <motion.a 
          className={active === 'skills' ? 'active' : ''}
          transition={{duration:0.2}} 
          whileTap={{scale:0.6}} 
          whileHover={{scale:1.2, transition:{duration:0.2}}}
          href="#skills"
          onClick={() => handleMenuClick('skills')}
        >
          Skills
        </motion.a>
        <motion.a 
          className={active === 'projects' ? 'active' : ''}
          transition={{duration:0.2}} 
          whileTap={{scale:0.6}} 
          whileHover={{scale:1.2, transition:{duration:0.2}}} 
          href="#projects"
          onClick={() => handleMenuClick('projects')}
        >
          Portfolio
        </motion.a>
        
        <motion.a 
          className={active === 'certificate' ? 'active' : ''}
          transition={{duration:0.2}} 
          whileTap={{scale:0.6}} 
          whileHover={{scale:1.2, transition:{duration:0.2}}} 
          href="#certificate"
          onClick={() => handleMenuClick('certificate')}
        >
          Certificate
        </motion.a>
      </motion.div>

      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration:2}} className="slidebar-container">

         <ul className="slidebar">
          <li>
            <motion.a 
              className={active === 'home' ? 'active' : ''}
              transition={{duration:1}} 
              whileHover={{scale:1.2}} 
              href="#home"
              onClick={() => handleMenuClick('home')}
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a 
              className={active === 'about' ? 'active' : ''}
              transition={{duration:1}} 
              whileHover={{scale:1.2}} 
              href="#about"
              onClick={() => handleMenuClick('about')}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a 
              className={active === 'skills' ? 'active' : ''}
              transition={{duration:1}} 
              whileHover={{scale:1.2}} 
              href="#skills"
              onClick={() => handleMenuClick('skills')}
            >
              Skills
            </motion.a>
          </li>
          <li>
            <motion.a 
              className={active === 'projects' ? 'active' : ''}
              transition={{duration:1}} 
              whileHover={{scale:1.2}} 
              href="#projects"
              onClick={() => handleMenuClick('projects')}
            >
              Protfolio
            </motion.a>
          </li>
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{duration:0.1, type: 'spring'}} whileTap={{ scale: 0.8, transition: { duration: 0.1 } }} 
      whileHover={{ scale: 1.06, transition: { duration: 0.1 } }}
      className="contact-button">
        <a 
          className={active === 'contact' ? 'active' : ''}
          href="#contact"
          onClick={() => handleMenuClick('contact')}
        >
          Contact
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration:1}} className="menu-logo" onClick={toggleMenu}><IoMenu /></motion.div>

    </div>
  )
}

export default Navbar