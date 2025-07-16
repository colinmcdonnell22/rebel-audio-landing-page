"use client"

import { useState, useEffect } from 'react'
import SplitWithScreenshotOnDark from '@/components/blocks/heros/split-with-screenshot-on-dark'
import SimpleThreeColumnWithSmallIconsOnDark from '@/components/blocks/feature-sections/simple-three-column-with-small-icons-on-dark'
import WithProductScreenshotOnDark from '@/components/blocks/feature-sections/with-product-screenshot-on-dark'
import SimpleCenteredOnBrand from '@/components/blocks/ctas/simple-centered-on-brand'
import { SimpleFooterWithFourGrids } from '@/components/blocks/footers/simple-footer-with-four-grids'
import LoadingScreen from '@/components/ui/loading-screen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setAssetsLoaded(true)
    } else {
      // Wait for all assets to load
      const handleLoad = () => setAssetsLoaded(true)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  function handleLoadingComplete() {
    // Only complete loading if assets are also loaded, or after minimum time
    if (assetsLoaded) {
      setIsLoading(false)
    } else {
      // If assets aren't loaded yet, wait a bit more then complete anyway
      setTimeout(() => setIsLoading(false), 500)
    }
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <main 
        className={`min-h-screen bg-[#1a1a1a] text-[#f5f5f5] transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <SplitWithScreenshotOnDark />
        <SimpleThreeColumnWithSmallIconsOnDark />
        <WithProductScreenshotOnDark />
        <SimpleCenteredOnBrand />
        <SimpleFooterWithFourGrids />
      </main>
    </>
  )
}