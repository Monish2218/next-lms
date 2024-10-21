import { HeroSection } from '@/components/HeroSection'
import { FeatureSection } from '@/components/FeatureSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <HeroSection />
          <FeatureSection />
        </div>
      </main>
    </div>
  )
}
