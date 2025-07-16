"use client"

import { useState } from 'react'

// Predefined heights for consistent server/client rendering
const waveformHeights = [
  45, 32, 68, 55, 41, 73, 29, 62, 48, 71, 
  36, 59, 44, 67, 38, 56, 42, 65, 34, 61,
  47, 69, 33, 58, 46, 72, 31, 64, 49, 70,
  37, 57, 43, 66, 39, 60, 45, 68, 35, 63
];

export default function SimpleCenteredOnBrand() {
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
    <div className="bg-background relative overflow-hidden">
      {/* Decorative waveform graphics */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="flex items-end space-x-1">
          {waveformHeights.map((height, i) => (
            <div
              key={i}
              className="bg-primary/20 w-1 rounded-full"
              style={{
                height: `${height}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl font-[var(--font-display)]">
            Ready to revolutionize your podcast?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-muted-foreground font-[var(--font-body)]">
            Join thousands of creators already on the waitlist for early access to Rebel Audio.
          </p>
          
          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-md border-0 bg-secondary px-3.5 py-2.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary font-[var(--font-body)]"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed font-[var(--font-body)] whitespace-nowrap"
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </div>
          </form>
          
          <p className="mt-4 text-sm text-muted-foreground font-[var(--font-body)]">
            No spam, just updates on our launch.
          </p>
        </div>
      </div>
    </div>
  )
}