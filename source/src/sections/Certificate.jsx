import React, { useRef, useState, useEffect } from 'react'
import './Certificate.scss'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaAward, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Certificate() {
  const sectionRef = useRef(null)
  const certificatesInView = useInView(sectionRef, { once: false, margin: '-20% 0px -20% 0px', amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const fadeDown = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
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

  const certificatesData = [
    {
      id: 1,
      title: "Frontend Web Development",
      issuer: "Udemy",
      date: "Octomber 2025",
      icon: <FaAward />,
      verifyLink: "https://www.udemy.com/certificate/UC-1c049c94-9f66-4f7b-8cfb-435137dfc070/",
    },
    {
      id: 2,
      title: "Postman API Fundamentals",
      issuer: "Postman API",
      date: "Octomber 2025",
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
      date: "Octomber 2024",
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

  const itemsPerPage = 4
  const totalPages = Math.ceil(certificatesData.length / itemsPerPage)

  // Get visible certificates
  const getVisibleCertificates = () => {
    const startIndex = currentIndex * itemsPerPage
    return certificatesData.slice(startIndex, startIndex + itemsPerPage)
  }

  // Auto-rotate certificates
  useEffect(() => {
    if (!isPaused && certificatesInView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages)
      }, 5000) // Change every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused, certificatesInView, totalPages])

  // Manual navigation
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume after 5s
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume after 5s
  }

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume after 5s
  }

  return (
    <div ref={sectionRef} className="certificates-container">
      <div className="certificates-wrapper">
        
        {/* Header Section */}
        <motion.div 
          className="certificates-header"
          variants={fadeDown}
          initial="hidden"
          animate={certificatesInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2 className="certificates-title">
            My <span>Certifications</span>
          </h2>
          <p className="certificates-subtitle">
            Recognitions of my continuous learning and skill development
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="certificates-carousel-container">
          
          {/* Left Arrow */}
          <motion.button
            className="carousel-arrow left"
            onClick={handlePrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeUp}
            initial="hidden"
            animate={certificatesInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaChevronLeft />
          </motion.button>

          {/* Certificates Grid */}
          <div 
            className="certificates-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="certificates-grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {getVisibleCertificates().map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="certificate-card"
                    variants={fadeUp}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Certificate Icon */}
                    <div className="certificate-icon">
                      {cert.icon}
                    </div>

                    {/* Certificate Content */}
                    <div className="certificate-content">
                      <h3 className="certificate-title">{cert.title}</h3>
                      <p className="certificate-issuer">{cert.issuer}</p>
                      <p className="certificate-date">{cert.date}</p>
                    </div>

                    {/* Verify Button */}
                    <motion.a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="verify-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Verify</span>
                    </motion.a>

                    {/* Decorative Border */}
                    <div className="certificate-border"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            className="carousel-arrow right"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeUp}
            initial="hidden"
            animate={certificatesInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaChevronRight />
          </motion.button>

        </div>

        {/* Progress Indicators */}
        {/* <motion.div 
          className="carousel-indicators"
          variants={fadeUp}
          initial="hidden"
          animate={certificatesInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </motion.div> */}

      </div>
    </div>
  )
}

export default Certificate