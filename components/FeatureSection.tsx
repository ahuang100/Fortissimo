'use client'

import { useEffect, useRef } from "react"
import { Music, Search, PlayCircle } from "lucide-react"

interface FeatureSectionProps {
  title: string
  subtitle: string
  description: string
  imageType: 'music' | 'search' | 'play'
  reverse?: boolean
  bgColor?: string
}

export default function FeatureSection({ title, subtitle, description, imageType, reverse = false, bgColor = 'bg-white' }: FeatureSectionProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, { threshold: 0.3 }) 

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out')
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const IconComponent = {
    music: Music,
    search: Search,
    play: PlayCircle
  }[imageType]

  return (
    <section className={`py-16 px-6 ${bgColor}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center scroll-animate">{title}</h2>
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
          <div className={`bg-gray-100 p-8 rounded-lg shadow-lg scroll-animate ${reverse ? 'md:col-start-2' : ''}`}>
            <h3 className="text-2xl font-semibold mb-4">{subtitle}</h3>
            <p className="text-gray-700 text-lg">{description}</p>
          </div>
          <div className={`bg-gray-200 h-72 rounded-lg flex items-center justify-center shadow-lg scroll-animate ${reverse ? 'md:col-start-1' : ''}`}>
            <IconComponent size={64} className="text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  )
}