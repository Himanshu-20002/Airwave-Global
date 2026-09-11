'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export interface MapLocationProps {
  imageSrc: string
  imageAlt: string
  mapUrl: string
  address: string
  title?: string
  actionLabel?: string
  className?: string
}

const springConfig = { damping: 22, stiffness: 120 }

export function MapLocation({
  imageSrc,
  imageAlt,
  mapUrl,
  address,
  title = 'Google Maps Location',
  actionLabel = 'Open in Maps',
  className = ''
}: MapLocationProps) {
  const containerRef = useRef<HTMLAnchorElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseSpringX = useSpring(mouseX, springConfig)
  const mouseSpringY = useSpring(mouseY, springConfig)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  const scrollY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 1024 || !containerRef.current) return

    const bounds = containerRef.current.getBoundingClientRect()
    const xOffset = (event.clientX - bounds.left) / bounds.width - 0.5
    const yOffset = (event.clientY - bounds.top) / bounds.height - 0.5

    mouseX.set(-xOffset * 35)
    mouseY.set(-yOffset * 35)
  }

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <a
      ref={containerRef}
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMousePosition}
      className={`relative block h-64 overflow-hidden rounded-2xl border border-slate-200 shadow-md group sm:h-80 lg:h-96 ${className}`}
    >
      <motion.div
        className="absolute inset-0 -top-[12%] h-[124%] w-full transform-gpu will-change-transform"
        style={{ y: scrollY }}
      >
        <motion.div
          className="absolute -left-[6%] -top-[6%] h-[112%] w-[112%] transform-gpu will-change-transform"
          style={{ x: mouseSpringX, y: mouseSpringY }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-slate-950/10 transition-colors duration-300 group-hover:bg-slate-950/10" />

      {/* Overlay: Centered Glassmorphic Rectangle */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        <div className="w-[84%] sm:w-auto max-w-[310px] sm:max-w-md rounded-xl sm:rounded-2xl bg-slate-950/25 sm:bg-slate-950/15 p-3.5 sm:p-6 text-center backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="w-7 h-7 sm:w-10 sm:h-10 mx-auto mb-1.5 sm:mb-2 rounded-lg sm:rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#fe7f25]">
            <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <p className="mb-0.5 sm:mb-1 text-xs sm:text-base font-bold text-white tracking-tight">{title}</p>
          <p className="text-[10px] sm:text-xs leading-relaxed text-slate-200 font-medium line-clamp-2 sm:line-clamp-none">{address}</p>
          <span className="mt-2.5 sm:mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ff8a38] via-[#fe7f25] to-[#ea580c] px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300">
            {actionLabel}
          </span>
        </div>
      </div>
    </a>
  )
}

export default MapLocation

/*
  Required packages in the destination project:
  npm install framer-motion lucide-react

  Tailwind classes used by this component:
  border-border, text-accent, and the standard spacing/color utilities.
*/
