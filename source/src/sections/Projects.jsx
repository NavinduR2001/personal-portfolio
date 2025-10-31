import React, { useRef, useState } from 'react'
import './Portfolio.scss'
import { motion, scale, useInView } from 'framer-motion'
import { FaGithub, FaYoutube, FaChevronLeft, FaChevronRight, FaUsers, FaUser } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiPython, SiDjango, SiWebrtc, SiOpencv, SiTensorflow, SiFirebase, SiAndroidstudio, SiMysql, SiSpringboot, SiCss3, SiLaravel, SiPhp, SiHtml5 } from 'react-icons/si'
import { BiLogoSpringBoot } from "react-icons/bi";
import { ArtCenter, Event, RMS, Vehicle, WaveWord } from '../assets/assets'

function Projects() {
  const sectionRef = useRef(null)
  const projectsInView = useInView(sectionRef, { once: false, margin: '-20% 0px -20% 0px', amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const fadeUp = {
    hidden: { scale:0.8, opacity: 0 },
    visible: { scale:1, opacity: 1 }
  }

  const fadeDown = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale:1, opacity: 1 }
  }

  const projectsData = [
    {
      id: 1,
      title: "Smart Takeaway Ordering and Management System",
      description: "A full-stack web application for restaurants that enables online takeaway ordering, scheduled pickups and efficient management of daily operations.",
      image: RMS,
      type: "individual",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express", icon: <SiExpress /> }
      ],
      github: "https://github.com/NavinduR2001/lankan-lounge-restaurant",
      demo: "https://www.linkedin.com/posts/navindu-ramanayaka-125082303_webdevelopment-mern-fullstackdevelopment-activity-7388296117119078401-j1jY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1uRi0BC1cxbyBTVH0kAPmEBlOILvOTAOk"
    },
    {
      id: 2,
      title: "WaveWords | Hand Sign Recognition Video Call App",
      description: "Develop a mobile application that empowers people with hearing or speech impairments by enabling real time hand sign recognition during video calls.",
      image: WaveWord,
      type: "group",
      technologies: [
        { name: "React-Native", icon: <SiReact /> },
        { name: "Python", icon: <SiPython /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Tensorflow", icon: <SiTensorflow /> },
        { name: "webRTC", icon: <SiWebrtc /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Android Studio", icon: <SiAndroidstudio /> },
      ],
      github: "https://github.com/NavinduR2001/hand-sign-recognize-mobile-app",
      demo: "https://www.linkedin.com/posts/navindu-ramanayaka-125082303_capstoneproject-wavewords-ai-activity-7373358446206758912-8D6G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1uRi0BC1cxbyBTVH0kAPmEBlOILvOTAOk"
    },
    {
      id: 3,
      title: "Vehicle Valuation and Analytics Management System",
      description: "A Web-based Vehicle Valuation and Analytics Management System developed for Rawan Auto Care that automates valuation workflows, financial management and performance analytics.",
      image: Vehicle,
      type: "group",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express", icon: <SiExpress /> }
      ],
      github: "https://github.com/NavinduR2001/Vehicle-Valuation-and-Analytics-Management-System",
      demo: "alert('Ongoing Project Demo will be available soon!')"
    },
    {
      id: 4,
      title: "Event Management System with AI Integration",
      description: "Developing a system to manage university societies’ events that automate event scheduling, managing and enhanced with AI-driven caption generation and automatic flyer creation.[Co-Developer (2-member)]",
      image: Event ,
      type: "group",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Java", icon: <BiLogoSpringBoot /> },
        { name: "MySQL", icon: <SiMysql /> },
         { name: "Python", icon: <SiPython /> },
         { name: "Tensorflow", icon: <SiTensorflow /> }
      ],
      github: "https://github.com/MeviniSL/Event---Management-",
      demo: "alert('Ongoing Project Demo will be available soon!')"
    },
    {
      id: 5,
      title: "Art Center Management System",
      description: "Designed a university web system to manage art center bookings, instrument reservations, and event scheduling.Added features for event listings and performance analytics with visual dashboards.",
      image: ArtCenter,
      type: "group",
      technologies: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "MySQL", icon: <SiMysql /> }
      ],
      github: "https://github.com/Piumalhk/Sabra-Music",
      demo: "https://drive.google.com/file/d/1M5uro7_5Rm7_N-GfySjvRjWU6SC3A71y/view"
    },
  ]

  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
      }
    })
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projectsData.length
      visible.push(projectsData[index])
    }
    return visible
  }

  const visibleProjects = getVisibleProjects()

  return (
    <div ref={sectionRef} className='projects-container'>
      <div className="projects-wrapper">
        
        {/* Header Section */}
        <motion.div 
          variants={fadeDown}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
          transition={{ type: 'spring', duration: 2, delay: projectsInView ? 0.1 : 0 }}
          className="projects-header"
        >
          <h1 className="projects-title">
            My <span>Portfolio</span>
          </h1>
          <p className="projects-subtitle">
            Bringing ideas to life through creativity and code
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="carousel-container">
          
          {/* Left Arrow */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate={projectsInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: projectsInView ? 0.2 : 0 }}
            className="carousel-arrow left"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>

          {/* Projects Grid */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate={projectsInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: projectsInView ? 0.3 : 0 }}
            className="projects-carousel"
          >
            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Project Type Badge */}
                  <div className={`project-type-badge ${project.type}`}>
                    {project.type === 'group' ? <FaUsers /> : <FaUser />}
                    <span>{project.type === 'group' ? 'Group' : 'Individual'}</span>
                  </div>

                  <div className="project-image-container">
                    <div className="project-image">
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className="image-placeholder">
                          <span>{project.title.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} className="tech-item" title={tech.name}>
                          {tech.icon}
                        </div>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github">
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="action-btn demo"
                        onClick={(e) => {
                          if (project.demo.startsWith('alert(')) {
                            e.preventDefault()
                            alert('Ongoing Project! Demo will be available soon!')
                          }
                        }}
                      >
                        <FaYoutube />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Arrow */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate={projectsInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: projectsInView ? 0.2 : 0 }}
            className="carousel-arrow right"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Progress Indicators - MOVED OUTSIDE carousel-container */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: projectsInView ? 0.5 : 0 }}
          className="carousel-indicators"
        >
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Projects