import React, { useRef } from 'react'
import './Skills.scss'
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaJava, FaReact, FaLaravel, FaNode, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiDjango, SiMongodb, SiFirebase, SiGit, SiGithub, SiPostman, SiAdobephotoshop, SiTailwindcss } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdWeb, MdDesignServices, MdPhoneIphone, MdCode } from "react-icons/md";
import { motion, useInView } from 'framer-motion'
import { RiRobot2Fill,RiRobot2Line } from "react-icons/ri";

function Skills() {
  const servicesRef = useRef(null)
  const skillsRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: false, margin: '-20% 0px -20% 0px', amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: false, margin: '-20% 0px -20% 0px', amount: 0.3 })

  const fadeDown = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const skillStaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const serviceCard = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const skillItem = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  const services = [
    {
      icon: <MdWeb />,
      title: 'Web Development',
      // description: 'Building responsive and modern web applications using latest technologies'
    },
    
    {
      icon: <RiRobot2Line />,
      title: 'AI & ML Development',
      // description: 'Developing cross-platform mobile applications for iOS and Android'
    },
    
    {
      icon: <MdCode />,
      title: 'Backend Development',
      // description: 'Building scalable and secure server-side applications and APIs'
    },
    {
      icon: <MdDesignServices />,
      title: 'UI & UX Design',
      // description: 'Creating beautiful and intuitive user interfaces with great user experience'
    }
  ]

  const allSkills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <IoLogoJavascript />, name: 'JavaScript' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <BiLogoSpringBoot />, name: 'Spring Boot' },
    { icon: <GrMysql />, name: 'MySQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiGithub />, name: 'GitHub' },
    { icon: <VscVscodeInsiders />, name: 'VS Code' },
    { icon: <FaNode />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop' }
  ]

  return (
    <>
    <div className="full-service-page">

      {/* Services Section */}
      <div ref={servicesRef} className="services-container">
        <div className="services-wrapper">
          <motion.div 
            className="services-header"
            variants={fadeDown}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
          >
            <h2 className="services-title">My <span>Skills</span></h2>
            <p className="services-subtitle">What I can do for you</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={serviceCard}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className="skills-container">
        <div className="skills-wrapper">
          <motion.div 
            className="skills-header"
            variants={fadeDown}
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
          >
            {/* <h2 className="skills-title">Skills</h2> */}
            <p className="skills-subtitle">Tools and Technologies</p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            variants={skillStaggerContainer}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={skillItem}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -8, 8, -5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                </div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Skills