'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandPageBottom() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto scroll-animate">
        <h2 className="text-4xl font-bold mb-6">"Music is the universal language of mankind"</h2>
        <p className="mb-8 text-gray-300 text-xl">- Henry Wadsworth Longfellow, 1835</p>
        <Link href="/sign-up">
          <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  )
}