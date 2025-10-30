import React, { useRef, useState } from 'react'
import './Portfolio.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaBehance, FaFacebook, FaInstagram, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { IoMdCheckmarkCircle } from "react-icons/io"
import { MdError } from "react-icons/md"

function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef()
  const contactInView = useInView(sectionRef, { once: false, margin: '-20% 0px -20% 0px', amount: 0.3 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const fadeUp = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const fadeLeft = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const fadeRight = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 }
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

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
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

  return (
    <>
      <div ref={sectionRef} className='contact-container'>
        <div className="contact-wrapper">
          
          {/* Header */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8 }}
            className="contact-header"
          >
            <h1 className="contact-title">
              Get In <span>Touch</span>
            </h1>
            <p className="contact-subtitle">
              Let's work together to create something amazing !
            </p>
          </motion.div>

          <div className="contact-content">
            
            {/* Contact Info */}
            <motion.div 
              variants={fadeLeft}
              initial="hidden"
              animate={contactInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: contactInView ? 0.2 : 0 }}
              className="contact-info"
            >
              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>navinduramanayaka@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>+94 77 913 6049</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaWhatsapp />
                </div>
                <div className="info-text">
                  <h3>Whatsapp</h3>
                  <p>+94 70 198 9505</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h3>Location</h3>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-icon" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="#" className="social-icon" aria-label="Behance">
                    <FaBehance />
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={fadeRight}
              initial="hidden"
              animate={contactInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: contactInView ? 0.4 : 0 }}
              className="contact-form-container"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>

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
              </form>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h2>.navindu</h2>
              <p>Crafting digital experiences with passion and precision</p>
            </div>

            <div className="footer-social">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="GitHub"><FaGithub /></a>
                <a href="#" aria-label="Behance"><FaBehance /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Navindu Ramanayaka. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact