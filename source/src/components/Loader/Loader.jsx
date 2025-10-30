import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.scss'

function Loader({ onLoadingComplete }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      if (onLoadingComplete) {
        setTimeout(onLoadingComplete, 500) // Call after fade out
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loader-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="loader-text"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              .navindu
            </motion.h1>
            <div className="loader-bar">
              <motion.div
                className="loader-progress"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader