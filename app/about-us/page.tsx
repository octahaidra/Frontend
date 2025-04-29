import Image from "next/image"
import CTASection from "@/components/cta-section"

export default function AboutUsPage() {
  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story.</h1>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 px-4 py-2 rounded-full">
                <span className="text-yellow-800 font-medium">Thank you!</span>
              </div>
            </div>
            <Image
              src="/images/thank-you-character.png"
              alt="Person pointing at Octa's interface"
              width={400}
              height={400}
              className="mx-auto"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Behind the Octa&apos;s</h2>
            <p className="text-gray-600 mb-4">
              Octa&apos;s was founded in 2023 with a simple mission: to make AI accessible to everyone. Our team of
              passionate engineers and designers worked tirelessly to create a platform that is both powerful and easy
              to use.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small project has grown into a comprehensive AI solution used by thousands of businesses
              worldwide. We&apos;re proud of our journey and excited about the future.
            </p>
            <p className="text-gray-600">
              Our commitment to innovation and user experience drives everything we do. We believe that AI should be a
              tool that empowers people, not replaces them.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
