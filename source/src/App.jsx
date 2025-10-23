import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
   <div className="portfolio-container">
    <div className="navbar-fixed"><Navbar/></div>
    <section><Home /></section>
    <section><About /></section>
    <section><Projects /></section>
    <section><Contact /></section>
   </div> 
  )
}

export default App
