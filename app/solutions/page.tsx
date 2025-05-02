"use client"

import CTASection from "@/components/cta-section"
import { MarqueeDemo } from "@/components/marquee-demo"

export default function SolutionsPage() {
  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Octa&apos;s, unlock new possibilities.</h1>
          <p className="text-gray-600 mb-8">
            Discover how our AI platform can transform your workflow and boost productivity. From content creation to
            data analysis, Octa&apos;s has you covered.
          </p>
        </div>

        <div className="mt-12 relative max-w-5xl mx-auto">
          <MarqueeDemo />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
