import Link from "next/link"
import { Check } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function PricingPage() {
  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plans & Pricing</h1>
          <p className="text-gray-600 mb-8">
            Choose the perfect plan for your needs. Whether you&apos;re just starting out or scaling up, we have a plan
            that fits your budget.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">$0</h2>
              <p className="text-gray-600 mb-4">Free</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Basic AI features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Limited generations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Community support</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors w-full"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg border shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">$49</h2>
              <p className="text-gray-600 mb-4">Standard</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Advanced AI features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Unlimited generations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">API access</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors w-full"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="bg-purple-900 text-white rounded-lg border border-purple-700 shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">$99</h2>
              <p className="text-purple-300 mb-4">Enterprise</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-300 mt-0.5" />
                  <span className="text-sm">All features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-300 mt-0.5" />
                  <span className="text-sm">Unlimited everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-300 mt-0.5" />
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-300 mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-300 mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center bg-white text-purple-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors w-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
