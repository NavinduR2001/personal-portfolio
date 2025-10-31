import React, { useRef } from 'react'
import './Portfolio.scss'
import { ProfileE } from '../assets/assets'
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { useInView, motion } from 'framer-motion'

function About() {
  const sectionRef = useRef(null)
  const aboutInView = useInView(sectionRef, { once: false, margin: '-20% 0px -20% 0px', amount: 0.4 })

  const fadeLeft = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
  const fadeRight = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
  const fadeUp = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }
  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 0.8 }
  }

  return (
    <div className='about-container'>
      <div className="about-wrapper">
        <div className="about-image">
          <motion.img
            key={aboutInView ? 'in' : 'out'}
            variants={popIn}
            initial="hidden"
            animate={aboutInView ? 'visible' : 'hidden'}
            transition={{ type: 'spring', stiffness: 100, duration: 1.2, delay: aboutInView ? 0.2 : 0 }}
            src={ProfileE}
            alt="About Me"
/>
        </div>

        <div
          ref={sectionRef}
          className={`about-me-content ${aboutInView ? 'is-inview' : ''}`}
        >
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            animate={aboutInView ? 'visible' : 'hidden'}
            transition={{ type: 'spring', stiffness: 100, duration: 1.2 }}
            className="title"
          >
            <span>About</span> Me
          </motion.h1>

          <motion.p
            variants={fadeRight}
            initial="hidden"
            animate={aboutInView ? 'visible' : 'hidden'}
            transition={{ type: 'spring', stiffness: 100, duration: 1.2, delay: aboutInView ? 0.3 : 0 }}
            className="description"
          >
            Hi, I'm Navindu Ramanayaka, a passionate and detail-oriented Intern Software Engineer who loves building creative and impactful digital solutions. I enjoy working on web development, AI & machine learning and UI/UX design, combining logical thinking with visual creativity to craft meaningful user experiences.
            <br /><br />I’m motivated by challenges, eager to learn new technologies and always looking for opportunities to grow as both a developer and a problem solver. My goal is to keep learning, keep improving and contribute to projects that make a real difference.
          </motion.p>

          <div className="edu-sector">
            <div className="edu-title">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1 : 0 }}
                className='ab-me-icon'
              >
                <FaGraduationCap />
              </motion.div>
              <motion.h1
                variants={fadeRight}
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1 : 0 }}
              >
                Education
              </motion.h1>
            </div>

            <ul className="education-list">
              <motion.li
                variants={fadeRight}
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1.2 : 0 }}
              >
                <h3>BSc. (Hons) in Computing & Information Systems</h3>
                <p>Faculty of Computing, Sabaragamuwa University of Sri Lanka</p>
                <span>Current GPA : 3.8</span>
              </motion.li>
              <motion.li
                variants={fadeRight}
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1.3 : 0 }}
              >
                <h3>Advanced Level - Physical Science Stream</h3>
                <p>H/ Weeraketiya Rajapaksha Central College</p>
              </motion.li>
            </ul>
          </div>

          <div className="exp-sector">
            <div className="exp-title">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1.7 : 0 }}
                className='ab-me-icon'
              >
                <MdWork />
              </motion.div>
              <motion.h1
                variants={fadeRight}
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1.8 : 0 }}
              >
                Experiences
              </motion.h1>
            </div>

            <motion.ul
              variants={fadeRight}
              initial="hidden"
              animate={aboutInView ? 'visible' : 'hidden'}
              transition={{ type: 'spring', stiffness: 100, duration: 1.0, delay: aboutInView ? 1.9 : 0 }}
              className="experience-list"
            >
              <li>
                <h3>Internship</h3>
                <p>People's Bank, Weeraketiya Branch</p>
                <span>2022 September - 2023 September</span>
              </li>
            </motion.ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About