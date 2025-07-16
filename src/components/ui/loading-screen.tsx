"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const duration = 2500 // 2.5 seconds total loading time
    const interval = 50 // Update every 50ms
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          // Delay before calling onComplete to show 100% briefly
          setTimeout(() => {
            onComplete()
          }, 300)
          return 100
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#1a1a1a] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background pattern - same as hero section */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/5"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="loading-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#loading-pattern)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      {/* Logo - Even Bigger */}
      <div className="relative w-[32rem] h-32 mb-12 animate-pulse">
        <Image
          src="/logo.png?v=2"
          alt="Rebel Audio"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Welcome message - Much Bigger */}
      <div className="mb-16 px-8">
        <p className="text-[#f5f5f5] text-4xl md:text-5xl lg:text-6xl font-semibold text-center font-[var(--font-display)] leading-tight">
          Welcome to the era of social audio.
        </p>
      </div>

      {/* Loading bar container - Bigger */}
      <div className="w-96 max-w-lg">
        {/* Loading bar background */}
        <div className="w-full h-2 bg-[#262626] rounded-full overflow-hidden">
          {/* Loading bar fill */}
          <div 
            className="h-full bg-gradient-to-r from-[#f5f5f5] to-[#a3a3a3] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading percentage - Bigger */}
        <div className="mt-6 text-center">
          <span className="text-[#a3a3a3] text-lg font-medium font-[var(--font-body)]">
            Loading... {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  )
} 