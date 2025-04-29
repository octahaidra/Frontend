import CTASection from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Big ideas need strong partners.</h1>
          <p className="text-gray-600 mb-8">
            Join forces with Octa&apos;s to bring your vision to life. Our services provide the tools and support you
            need to succeed.
          </p>
        </div>

        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="bg-white rounded-lg border shadow-lg overflow-hidden p-4">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-purple-100 p-4 rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Service {i + 1}</h3>
                  <p className="text-xs text-gray-600">
                    Description of this amazing service and how it helps your business.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
