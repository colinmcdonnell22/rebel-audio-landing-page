"use client"

import { Upload, Wand2, Share2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const features = [
  {
    name: 'Upload',
    description:
      'Drop your audio files and let our AI handle the rest',
    href: '#',
    icon: Upload,
  },
  {
    name: 'AI Magic',
    description:
      'Smart tagging, transcription, and automatic clipping',
    href: '#',
    icon: Wand2,
  },
  {
    name: 'Share Everywhere',
    description:
      'Distribute across all platforms with one click',
    href: '#',
    icon: Share2,
  },
]

// Animated Audio Waveform Component
function AudioWaveform() {
  const [offset, setOffset] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Mark as mounted after hydration
    setMounted(true)
    
    // Animate the wave by continuously updating offset
    const interval = setInterval(() => {
      setOffset(prev => prev + 0.05)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Static wave points for SSR (prevents hydration mismatch)
  const staticWavePoints = "0,50 5,52 10,54 15,52 20,48 25,45 30,48 35,52 40,55 45,52 50,48 55,45 60,48 65,52 70,55 75,52 80,48 85,45 90,48 95,52 100,50"

  // Generate smooth wave points (only used after mount)
  const generateWavePoints = () => {
    if (!mounted) return staticWavePoints
    
    const points = []
    const width = 100 // SVG viewBox width
    const numPoints = 200
    
    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * width
      // Create multiple overlapping sine waves for complexity
      const wave1 = Math.sin((i / numPoints) * Math.PI * 6 + offset) * 15
      const wave2 = Math.sin((i / numPoints) * Math.PI * 4 + offset * 1.5) * 10
      const wave3 = Math.sin((i / numPoints) * Math.PI * 8 + offset * 0.8) * 8
      const y = 50 + wave1 + wave2 + wave3 // Center at 50 with wave variations
      points.push(`${x},${y}`)
    }
    
    return points.join(' ')
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-25" style={{ transform: 'translateY(-40px)' }}>
      <div className="w-full h-16">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="33%" stopColor="#ea580c" />
              <stop offset="66%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.6" />
              <stop offset="33%" stopColor="#ea580c" stopOpacity="0.6" />
              <stop offset="66%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Main wave */}
          <polyline
            points={generateWavePoints()}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Secondary wave for depth */}
          <polyline
            points={generateWavePoints()}
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            transform="translate(0, 5)"
          />
        </svg>
      </div>
    </div>
  )
}

export default function SimpleThreeColumnWithSmallIconsOnDark() {
  return (
    <div className="bg-background py-24 sm:py-32 relative overflow-hidden">
      {/* Animated Audio Waveform Background */}
      <AudioWaveform />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl lg:text-balance font-[var(--font-display)]">
            Three steps to podcast perfection
          </p>
          <p className="mt-6 text-lg/8 text-muted-foreground font-[var(--font-body)]">
            Transform your audio into polished, professional content ready for distribution across all major platforms with our AI-powered workflow.
          </p>
        </div>
        
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-18 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                {/* Glassmorphism border highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ mask: 'linear-gradient(black, transparent 50%)' }} />
                
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500 mb-6 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white group-hover:text-accent transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 font-[var(--font-display)] group-hover:text-accent transition-colors duration-500">
                    {feature.name}
                  </h3>
                  
                  <p className="text-white/70 leading-7 font-[var(--font-body)] group-hover:text-white/90 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}