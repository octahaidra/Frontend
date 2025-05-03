import Link from "next/link"

export default function CTASection() {
  return (
    <section className="cta-section text-white py-12 md:py-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Brainstorm now!</h2>
        <p className="text-purple-200 mb-6 max-w-md mx-auto">Supercharge your creativity with our AI tools</p>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Start for free
        </Link>
      </div>
    </section>
  )
}
