import Taskbar from '@/components/Taskbar'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import LandPageBottom from '@/components/LandPageBottom'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Taskbar />
      <main className="flex-grow pt-16">
        <Hero />
        <FeatureSection
          title="Create, listen, repeat"
          subtitle="Discover New Sounds"
          description="Explore a vast library of tracks and playlists curated just for you."
          imageType="music"
        />
        <FeatureSection
          title="Search and share the world of music"
          subtitle="Connect with Artists"
          description="Follow your favorite artists and discover rising stars in the music scene."
          imageType="search"
          reverse={true}
          bgColor="bg-gray-50"
        />
        <FeatureSection
          title="Personalize your sound"
          subtitle="Create Custom Playlists"
          description="Craft the perfect soundtrack for any moment with our intuitive playlist tools."
          imageType="play"
        />
        <LandPageBottom />
      </main>
      <Footer />
    </div>
  )
}