import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Loader from './components/Loader/Loader'

import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Certificate from './sections/Certificate'
import Responsive from './components/responive design/Responsive'
import { FaHtml5, FaCss3Alt, FaPhp, FaJava, FaPython, FaReact, FaLaravel, FaNode, FaFigma } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiExpress, SiMongodb, SiFirebase, SiGit, SiGithub, SiTailwindcss, SiPostman, SiAdobephotoshop } from "react-icons/si"
import { BiLogoSpringBoot } from "react-icons/bi"
import { GrMysql } from "react-icons/gr"
import { VscVscodeInsiders } from "react-icons/vsc"

const techBubbles = [
  { icon: <FaHtml5 />, color: '#E34F26' },
  { icon: <FaCss3Alt />, color: '#1572B6' },
  { icon: <IoLogoJavascript />, color: '#F7DF1E' },
  { icon: <FaPhp />, color: '#777BB4' },
  { icon: <FaJava />, color: '#007396' },
  { icon: <FaPython />, color: '#3776AB' },
  { icon: <FaReact />, color: '#61DAFB' },
  { icon: <SiExpress />, color: '#000000' },
  { icon: <FaLaravel />, color: '#FF2D20' },
  { icon: <BiLogoSpringBoot />, color: '#6DB33F' },
  { icon: <GrMysql />, color: '#4479A1' },
  { icon: <SiMongodb />, color: '#47A248' },
  { icon: <SiFirebase />, color: '#FFCA28' },
  { icon: <SiGit />, color: '#F05032' },
  { icon: <SiGithub />, color: '#ffffff7a' },
  { icon: <VscVscodeInsiders />, color: '#007ACC' },
  { icon: <FaNode />, color: '#339933' },
  { icon: <SiTailwindcss />, color: '#06B6D4' },
  { icon: <SiPostman />, color: '#FF6C37' },
  { icon: <FaFigma />, color: '#F24E1E' },
  { icon: <SiAdobephotoshop />, color: '#31A8FF' }
]

// Utility to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  const arr = array.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function TechBubblesBG() {
  // Shuffle bubbles and generate random positions for each render
  const shuffled = shuffleArray(techBubbles)
  return (
    <div className="tech-bubbles-bg">
      {shuffled.map((bubble, i) => {
        const left = Math.random() * 90 + 2; // 2% - 92%
        const size = Math.random() * 40 + 40; // 40px - 80px
        const duration = Math.random() * 10 + 12; // 12s - 22s
        const delay = Math.random() * 10; // 0s - 10s
        return (
          <span
            key={i}
            className="tech-bubble"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              color: bubble.color,
              opacity: 0.13,
            }}
          >
            {bubble.icon}
          </span>
        )
      })}
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <>
      <Loader onLoadingComplete={handleLoadingComplete} />
      {!loading && (
        <>
          <TechBubblesBG />
          <div className='portfolio-container'>
            <div className="navbar-fixed"><Navbar /></div>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="certificate"><Certificate /></section>
            <section id="contact"><Contact /></section>
          </div>
          <div className="responsive"><Responsive /></div>
        </>
      )}
    </>
  )
}

export default App
