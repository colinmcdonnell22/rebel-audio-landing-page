"use client"

import { ChevronDown, Volume2, VolumeX } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function SplitWithScreenshotOnDark() {
  const [isMuted, setIsMuted] = useState(true)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    console.log('Waitlist signup:', email)
    
    // Add your actual API call here
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form or show success message
    setEmail('')
    setIsSubmitting(false)
    alert('Thanks for joining the waitlist!')
  }

  return (
    <div className="relative isolate overflow-hidden bg-[#1a1a1a]">
      {/* Gradient Background - removed distracting video background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a1a1a] to-[#262626]" />



      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#pattern)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      {/* Video Control Button */}
      <button
        onClick={() => {
          setIsMuted(!isMuted)
          const video = document.getElementById('main-video') as HTMLVideoElement
          if (video) {
            video.muted = !isMuted
          }
        }}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-[#f5f5f5]" />
        ) : (
          <Volume2 className="w-5 h-5 text-[#f5f5f5]" />
        )}
      </button>

      <div className="mx-auto max-w-7xl px-6 pt-4 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-4 lg:flex-1">
          <div className="mb-4">
            <div className="relative w-40 h-12">
              <Image
                src="/logo.png?v=2"
                alt="Rebel Audio"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="inline-flex items-center space-x-3">
              <span className="rounded-full bg-[#f5f5f5]/10 px-4 py-2 text-sm font-medium text-[#f5f5f5] ring-1 ring-[#f5f5f5]/20 ring-inset">
                Early Access
              </span>
              <span className="text-sm font-medium text-[#a3a3a3]">
                Limited spots available
              </span>
            </div>
          </div>

          <h1 className="mt-10 text-5xl font-bold tracking-tight text-[#f5f5f5] sm:text-7xl font-[var(--font-display)]">
            SOCIAL AUDIO,<br />
            SIMPLIFIED.
          </h1>

          <p className="mt-8 text-lg font-medium text-[#a3a3a3] sm:text-xl/8 font-[var(--font-body)]">
            The social podcasting platform that turns your voice into viral content.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-lg bg-[#262626] border border-[#404040] px-4 py-3 text-[#f5f5f5] placeholder-[#a3a3a3] focus:border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#f5f5f5]/20 font-[var(--font-body)]"
            />
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="rounded-lg bg-[#f5f5f5] px-6 py-3 text-sm font-semibold text-[#1a1a1a] shadow-sm hover:bg-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#f5f5f5]/20 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] transition-colors font-[var(--font-display)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#f5f5f5]"
            >
              {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
            </button>
          </form>

          <p className="mt-4 text-sm text-[#a3a3a3] font-[var(--font-body)]">
            Be the first to know when we launch. No spam, ever.
          </p>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-1 lg:ml-10 xl:ml-16 lg:flex lg:items-center">
          <div className="relative w-full">
            <div className="relative mx-auto max-w-2xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <video
                id="main-video"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-auto rounded-2xl bg-[#262626]/50 shadow-2xl ring-1 ring-[#f5f5f5]/20 backdrop-blur-sm"
              >
                <source src="https://www.dropbox.com/scl/fi/2zya7gqbnlz3supd91ux0/Rebel-Audio-Website-Sizzle_WC1.mp4?rlkey=vy7zoqbo41pryqwcxg68upklw&e=1&st=ldmg6tci&dl=1" type="video/mp4" />
                {/* Fallback placeholder */}
                <div className="w-full aspect-video bg-gradient-to-br from-[#262626] to-[#1a1a1a] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f5f5]/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#f5f5f5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-[#a3a3a3] text-sm">Video Preview</p>
                  </div>
                </div>
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm text-[#a3a3a3] mb-2 font-[var(--font-body)]">Scroll to explore</p>
        <ChevronDown className="w-5 h-5 text-[#a3a3a3] animate-bounce" />
      </div>
    </div>
  )
}