import { Share2, BarChart3, Scissors, Globe } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    name: 'Social Media Optimization',
    description:
      'Automatically title, describe, and tag your podcast with AI-powered suggestions.',
    icon: Share2,
  },
  {
    name: 'Automated Clip Generation',
    description: 'AI identifies the best moments from your episodes and creates engaging clips ready for sharing.',
    icon: Scissors,
  },
  {
    name: 'Audience Analytics',
    description: 'Track engagement rates, reach, and audience growth across all platforms with detailed insights.',
    icon: BarChart3,
  },
  {
    name: 'Cross-Platform Distribution',
    description: 'Seamlessly distribute your content across all major podcast platforms with one-click publishing.',
    icon: Globe,
  },
]

export default function WithProductScreenshotOnDark() {
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-accent font-[var(--font-display)]">Social Podcasting</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl font-[var(--font-display)]">
                Built for the Social Media Age
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground font-[var(--font-body)]">
                Transform your podcast episodes into viral social content automatically. Reach new audiences and grow your following with AI-powered social optimization.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-foreground font-[var(--font-display)]">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-accent" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-[var(--font-body)]">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative lg:flex lg:items-center lg:justify-center">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                {/* Phone-shaped glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-accent/4 to-accent/8 blur-2xl rounded-[3rem] scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent blur-xl rounded-[3rem] scale-102" />
                <Image
                  src="/iphone.png"
                  alt="Rebel Audio Mobile App"
                  width={400}
                  height={800}
                  className="relative z-10 w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}