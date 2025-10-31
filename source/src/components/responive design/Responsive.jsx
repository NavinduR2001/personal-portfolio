import React, { useRef, useState } from 'react'
import './Responsive.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDownload, FaEnvelope, FaGraduationCap, FaAward, FaCode, FaExternalLinkAlt, FaFacebook, FaBehance, FaUsers, FaUser, FaYoutube, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { MdWork, MdDesignServices, MdWeb } from 'react-icons/md'
import { IoMdCheckmarkCircle } from "react-icons/io"
import { MdError } from "react-icons/md"
import { SiReact, SiJavascript, SiPython, SiMongodb, SiNodedotjs, SiGit, SiDocker, SiFigma, SiTailwindcss, SiMysql, SiPostgresql, SiPostman, SiExpress, SiDjango, SiFirebase, SiGithub, SiAdobephotoshop, SiOpencv, SiTensorflow, SiWebrtc, SiAndroidstudio, SiLaravel, SiPhp, SiHtml5, SiCss3 } from 'react-icons/si'
import { CV, Profile, ProfileE, RMS, WaveWord, Vehicle, Event, ArtCenter, Logo } from '../../assets/assets'
import { RiRobot2Line } from 'react-icons/ri'
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaJava, FaReact, FaLaravel, FaNode, FaFigma } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { BiLogoSpringBoot } from "react-icons/bi"
import { GrMysql } from "react-icons/gr"
import { VscVscodeInsiders } from "react-icons/vsc"

function Responsive() {
  const [menuOpen, setMenuOpen] = useState(false)
  const formRef = useRef()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const certificatesRef = useRef(null)
  const contactRef = useRef(null)

  const homeInView = useInView(homeRef, { amount: 0.3 })
  const aboutInView = useInView(aboutRef, { amount: 0.3 })
  const skillsInView = useInView(skillsRef, { amount: 0.3 })
  const projectsInView = useInView(projectsRef, { amount: 0.3 })
  const certificatesInView = useInView(certificatesRef, { amount: 0.3 })
  const contactInView = useInView(contactRef, { amount: 0.3 })

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    // EmailJS configuration - same as desktop version
    const serviceID = 'service_ift7hcm'
    const templateID = 'template_ixnm5ro'
    const publicKey = '7CspIjrnZ66Bz0CEI'

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsLoading(false)
        
        // Clear status after 5 seconds
        setTimeout(() => setStatus({ type: '', message: '' }), 5000)
      }, (error) => {
        setStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again or contact me directly.' 
        })
        setIsLoading(false)
        
        setTimeout(() => setStatus({ type: '', message: '' }), 5000)
      })
  }

  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <IoLogoJavascript />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaPhp />, name: 'PHP', color: '#777BB4' },
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
    { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
    { icon: <FaLaravel />, name: 'Laravel', color: '#FF2D20' },
    { icon: <BiLogoSpringBoot />, name: 'Spring Boot', color: '#6DB33F' },
    { icon: <GrMysql />, name: 'MySQL', color: '#4479A1' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
    { icon: <SiGit />, name: 'Git', color: '#F05032' },
    { icon: <SiGithub />, name: 'GitHub', color: '#181717' },
    { icon: <VscVscodeInsiders />, name: 'VS Code', color: '#007ACC' },
    { icon: <FaNode />, name: 'Node.js', color: '#339933' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop', color: '#31A8FF' }
  ]

  const projectsData = [
    {
      id: 1,
      title: "Smart Takeaway Ordering and Management System",
      description: "A full-stack web application for restaurants that enables online takeaway ordering, scheduled pickups and efficient management of daily operations.",
      image: RMS,
      type: "individual",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNode /> },
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
        { name: "Android Studio", icon: <SiAndroidstudio /> }
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
      demo: "#"
    },
    {
      id: 4,
      title: "Event Management System with AI Integration",
      description: "Developing a system to manage university societies' events that automate event scheduling, managing and enhanced with AI-driven caption generation and automatic flyer creation.",
      image: Event,
      type: "group",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Tensorflow", icon: <SiTensorflow /> }
      ],
      github: "https://github.com/MeviniSL/Event---Management-",
      demo: "#"
    },
    {
      id: 5,
      title: "Art Center Management System",
      description: "Designed a university web system to manage art center bookings, instrument reservations, and event scheduling. Added features for event listings and performance analytics with visual dashboards.",
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
    }
  ]

  const certificatesData = [
    {
      id: 1,
      title: "Frontend Web Development",
      issuer: "Udemy",
      date: "October 2025",
      icon: <FaAward />,
      verifyLink: "https://www.udemy.com/certificate/UC-1c049c94-9f66-4f7b-8cfb-435137dfc070/",
    },
    {
      id: 2,
      title: "Postman API Fundamentals",
      issuer: "Postman API",
      date: "October 2025",
      icon: <FaAward />,
      verifyLink: "https://badgr.com/public/assertions/tVVfle4BRuOSacBnCWyEHg?identity__email=navinduramanayaka1234@gmail.com",
    },
    {
      id: 3,
      title: "React Beginners",
      issuer: "Udemy",
      date: "August 2025",
      icon: <FaAward />,
      verifyLink: "https://www.udemy.com/certificate/UC-a0b35472-e3da-43a2-ad6e-3b087443cd14/",
    },
    {
      id: 4,
      title: "React Native Development",
      issuer: "Udemy",
      date: "May 2025",
      icon: <FaAward />,
      verifyLink: "https://www.udemy.com/certificate/UC-bce8a2f0-751b-4d09-bfd0-6fea21ef777e/",
    },
    {
      id: 5,
      title: "Java Basics",
      issuer: "Hacker Rank",
      date: "October 2024",
      icon: <FaAward />,
      verifyLink: "https://www.hackerrank.com/certificates/e013ab0da737",
    },
    {
      id: 6,
      title: "Web Design for Beginners",
      issuer: "Moratuwa University OLP",
      date: "October 2025",
      icon: <FaAward />,
      verifyLink: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1",
    },
    {
      id: 7,
      title: "Java Programming",
      issuer: "Great Learning",
      date: "September 2024",
      icon: <FaAward />,
      verifyLink: "https://www.mygreatlearning.com/certificate/GQPGZFTV",
    },
    {
      id: 8,
      title: "Adobe Photoshop Mastery",
      issuer: "Udemy",
      date: "December 2024",
      icon: <FaAward />,
      verifyLink: "https://www.udemy.com/certificate/UC-41ab69a7-246c-4ad1-9c65-628831438879/",
    }
  ]

  return (
    <div className="responsive-design">
      
      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        <div className="nav-header">
          <img src={Logo} alt="Logo" />
          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection(homeRef)}>Home</a>
          <a onClick={() => scrollToSection(aboutRef)}>About</a>
          <a onClick={() => scrollToSection(skillsRef)}>Skills</a>
          <a onClick={() => scrollToSection(projectsRef)}>Portfolio</a>
          <a onClick={() => scrollToSection(certificatesRef)}>Certificates</a>
          <a onClick={() => scrollToSection(contactRef)}>Contact</a>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section ref={homeRef} className="mobile-section home-section">
        <motion.div 
          className="hero-content"
          variants={fadeUp}
          initial="hidden"
          animate={homeInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-image">
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #9F2AFF, #6a00ff)', borderRadius: '50%' }}><img src={Profile} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /></div>    
            </div>
          

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={homeInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I am
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={homeInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Navindu Ramanayaka
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            animate={homeInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
              <span style={{"--i":4}} data-text="Full Stack Developer">Full Stack Developer</span>

              <span style={{"--i":3}} data-text="Frontend Developer">Frontend Developer</span>

              <span style={{"--i":2}} data-text="Backend Developer">Backend Developer</span>

              <span style={{"--i":1}} data-text="UI & UX Designer">UI & UX Designer</span>

             
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={homeInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Passionate Web Developer with a strong passion for building efficient and innovative solutions. I thrive in collaborative environments, enjoy tackling challenges and continuously strive to learn and grow.
          </motion.p>

          <motion.div 
            className="social-links"
            variants={fadeUp}
            initial="hidden"
            animate={homeInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/navindu-ramanayaka-125082303" target="_blank" rel="noopener noreferrer"><FaLinkedin className='s-icon' /></a>
                          <a href="https://github.com/NavinduR2001" target="_blank" rel="noopener noreferrer"><FaGithub className='s-icon' /></a>
                          <a href="https://www.behance.net/navinduramanayaka" target="_blank" rel="noopener noreferrer"><FaBehance className='s-icon' /></a>
                          <a href="https://web.facebook.com/navindu.ramanayaka" target="_blank" rel="noopener noreferrer"><FaFacebook className='s-icon' /></a>
                          <a href="https://www.instagram.com/navindu_rama" target="_blank" rel="noopener noreferrer"><FaInstagram className='s-icon' /></a>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            variants={fadeUp}
            initial="hidden"
            animate={homeInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href={CV} download className="btn-primary">
              <FaDownload /> Download CV
            </a>
            <a href="#contact" className="btn-secondary">
               Hire Me !
            </a>
            
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section ref={aboutRef} className="mobile-section about-section">
        <motion.div 
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2><span>About</span> Me</h2>
        </motion.div>

        <motion.div 
          className="about-image"
          variants={fadeUp}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={ProfileE}></img>
        </motion.div>

        <motion.p 
          className="about-description"
          variants={fadeUp}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I'm Navindu Ramanayaka, a passionate and detail-oriented Intern Software Engineer who loves building creative and impactful digital solutions. I enjoy working on web development, AI & machine learning and UI/UX design, combining logical thinking with visual creativity to craft meaningful user experiences.
          <br /><br />I’m motivated by challenges, eager to learn new technologies and always looking for opportunities to grow as both a developer and a problem solver. My goal is to keep learning, keep improving and contribute to projects that make a real difference.
        </motion.p>

        {/* Education */}
        <motion.div 
          className="info-block"
          variants={fadeUp}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="block-header">
            <FaGraduationCap className="block-icon" />
            <h3>Education</h3>
          </div>
          <div className="info-list">
            <div className="info-item">
              <h4>BSc. (Hons) in Computing & Information Systems</h4>
              <p>Sabaragamuwa University of Sri Lanka</p>
              <span>Current GPA: 3.8</span>
            </div>
            <div className="info-item">
              <h4>Advanced Level - Physical Science</h4>
              <p>H/ Weeraketiya Rajapaksha Central College</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div 
          className="info-block"
          variants={fadeUp}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="block-header">
            <MdWork className="block-icon" />
            <h3>Experience</h3>
          </div>
          <div className="info-list">
            <div className="info-item">
              <h4>Internship</h4>
              <p>People's Bank, Weeraketiya Branch</p>
              <span>2022 September - 2023 September</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section ref={skillsRef} className="mobile-section skills-section">
        <motion.div 
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={skillsInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2>My <span>Skills</span></h2>
          <p>My core strengths and the technologies</p>
        </motion.div>

        {/* Services */}
        <motion.div 
          className="services-grid"
          variants={fadeUp}
          initial="hidden"
          animate={skillsInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="service-card">
            <MdWeb  className="service-icon" />
            <h3>Web Development</h3>
            <p>Building responsive and modern web applications</p>
          </div>
          <div className="service-card">
            <RiRobot2Line className="service-icon" />
            <h3>AI & ML Development</h3>
            <p>Building intelligent applications with AI and machine learning</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Backend Development</h3>
            <p>Building robust and scalable server-side applications</p>
          </div>
          <div className="service-card">
            <MdDesignServices className="service-icon" />
            <h3>UI/UX Design</h3>
            <p>Creating beautiful and intuitive user interfaces</p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <p className="skills-subtitle">Tools and Technologies</p>
        <motion.div 
          className="skills-grid"
          variants={fadeUp}
          initial="hidden"
          animate={skillsInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section ref={projectsRef} className="mobile-section projects-section">
        <motion.div 
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2>My <span>Portfolio</span></h2>
          <p>Bringing ideas to life through creativity and code</p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={fadeUp}
              initial="hidden"
              animate={projectsInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Project Type Badge */}
              <div className={`project-type-badge ${project.type}`}>
                {project.type === 'group' ? <FaUsers /> : <FaUser />}
                <span>{project.type === 'group' ? 'Group' : 'Individual'}</span>
              </div>

              {/* Project Image */}
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-icon" title={tech.name}>
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className='code'>
                  <FaGithub /> Code
                </a>
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo.startsWith('alert(') ? "#" : project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='demo'
                    onClick={e => {
                      if (project.demo.startsWith('alert(')) {
                        e.preventDefault()
                        alert('Ongoing Project! Demo will be available soon!')
                      }
                    }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
     <section ref={certificatesRef} className="mobile-section certificates-section">
        <motion.div 
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={certificatesInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2><span>Certifications</span></h2>
          <p>Professional achievements and credentials</p>
        </motion.div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card"
              variants={fadeUp}
              initial="hidden"
              animate={certificatesInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
              <a 
                href={cert.verifyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="verify-btn"
              >
                <FaExternalLinkAlt /> Verify
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={contactRef} className="mobile-section contact-section">
        <motion.div 
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In <span>Touch</span></h2>
          <p>Let's work together to create something amazing!</p>
        </motion.div>

        <motion.div 
          className="contact-info"
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>navinduramanayaka@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>+94 77 913 6049</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </motion.div>

        <motion.h3 
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.3 }} 
          className='contact-subT'
        >
          Send me a message!
        </motion.h3>

        <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
          />
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject" 
            required 
          />
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            rows="5" 
            required
          ></textarea>

          {/* Status Message */}
          {status.message && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`status-message ${status.type}`}
            >
              {status.type === 'success' ? <IoMdCheckmarkCircle /> : <MdError />}
              <span>{status.message}</span>
            </motion.div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loader"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <FaPaperPlane className="btn-icon" />
              </>
            )}
          </button>
        </motion.form>

        <motion.div 
          className="footer-social"
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/navindu-ramanayaka-125082303" target="_blank" rel="noopener noreferrer"><FaLinkedin className='s-icon' /></a>
                        <a href="https://github.com/NavinduR2001" target="_blank" rel="noopener noreferrer"><FaGithub className='s-icon' /></a>
                        <a href="https://www.behance.net/navinduramanayaka" target="_blank" rel="noopener noreferrer"><FaBehance className='s-icon' /></a>
                        <a href="https://web.facebook.com/navindu.ramanayaka" target="_blank" rel="noopener noreferrer"><FaFacebook className='s-icon' /></a>
                        <a href="https://www.instagram.com/navindu_rama" target="_blank" rel="noopener noreferrer"><FaInstagram className='s-icon' /></a>
        </motion.div>

        <motion.p 
          className="copyright"
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          © 2025 Navindu Ramanayaka. All rights reserved.
        </motion.p>
      </section>

    </div>
  )
}

export default Responsive