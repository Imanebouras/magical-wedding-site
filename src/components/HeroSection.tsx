'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-pink-50 to-yellow-50" />
        
        <svg
          className="absolute bottom-0 right-1/4 w-96 h-96 opacity-20"
          viewBox="0 0 200 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 150L50 50M50 50L30 30M50 50L70 30M70 150L70 70M70 70L90 30M90 150L90 70M110 150L110 50M110 50L130 30M150 150L150 70M150 70L170 30M170 150L170 100"
            stroke="rgba(236, 72, 153, 0.3)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-pink-300"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-serif font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Imane & Mahdi
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-light text-gray-600 mb-8 tracking-widest"
        >
          Welcome to Our Fairytale Wedding
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-400" />
          <div className="w-2 h-2 rounded-full bg-gold-400" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-400" />
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-12 py-4 rounded-full text-white font-semibold text-lg overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="relative flex items-center justify-center gap-2">
            Enter Our Kingdom
            <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              ✨
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-pink-300" />
      </motion.div>
    </section>
  )
}