'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(236, 72, 153, 0.8), rgba(236, 72, 153, 0))`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.sin(particle.x) * 50, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-yellow-200"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 2.5) * 50],
            y: [0, Math.sin(i * Math.PI / 2.5) * 50],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}