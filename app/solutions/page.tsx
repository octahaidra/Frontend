import Image from "next/image"
import CTASection from "@/components/cta-section"

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

        <div className="mt-12 relative max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border shadow-lg overflow-hidden p-4">
            <div className="flex items-center justify-center">
              <Image
                src="/images/purple-octahedron.png"
                alt="Octa's AI interface mockup"
                width={400}
                height={300}
                className="w-auto h-auto"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-300 rounded-full opacity-50"></div>
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-300 rounded-full opacity-50"></div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
