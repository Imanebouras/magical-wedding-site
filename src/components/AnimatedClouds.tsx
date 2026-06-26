'use client'

import { motion } from 'framer-motion'

export function AnimatedClouds() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-20 left-0 w-96 h-32 bg-gradient-to-r from-white via-white to-transparent rounded-full opacity-60 blur-3xl"
        animate={{
          x: ['-100%', '150vw'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-40 right-0 w-96 h-32 bg-gradient-to-l from-white via-white to-transparent rounded-full opacity-40 blur-3xl"
        animate={{
          x: ['150vw', '-100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-24 bg-gradient-to-r from-white via-white to-transparent rounded-full opacity-50 blur-2xl"
        animate={{
          x: ['-100%', '150vw'],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
          delay: 10,
        }}
      />
    </div>
  )
}