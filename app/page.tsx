"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"
import CTASection from "@/components/cta-section"
import SplashCursor from '@/components/SplashCursor'
import ShinyText from '@/components/ShinyText';


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="gradient-bg">
      <section className="max-w-7xl mx-auto px-4 pt-8 md:pt-16 pb-8 md:pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-bold mb-4">Octa&apos;s for the AI Era</h1>
          <p className="text-gray-600 mb-6 md:mb-8 mx-auto max-w-2xl px-2">
            A new way of thinking to AI solutions. Helping you solve your business problems with AI. We are committed to
            providing the best AI solutions for your business.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-gradient-to-tl from-purple-400 to-purple-800 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:from-purple-700 hover:to-purple-500 transition-colors"

          >
            Get Started
          </Link>
        </div>

        <div className="mt-8 md:mt-12 relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center">
            <video ref={videoRef} className="w-full h-auto rounded-xl" autoPlay muted loop playsInline>
              <source src="/videos/octa-home-page.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/*<div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-8 md:w-16 h-8 md:h-16 bg-yellow-300 rounded-full opacity-50"></div>
          <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-6 md:w-12 h-6 md:h-12 bg-blue-300 rounded-full opacity-50"></div>
          */}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center">
            <div className="feature-icon bg-green-100 mx-auto mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Intelligent Automation</h3>
            <p className="text-xs md:text-sm text-gray-600">Streamline your workflows with AI-powered automation</p>
          </div>
          <div className="text-center">
            <div className="feature-icon bg-blue-100 mx-auto mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Creative Assistance</h3>
            <p className="text-xs md:text-sm text-gray-600">Generate ideas and content with AI assistance</p>
          </div>
          <div className="text-center">
            <div className="feature-icon bg-purple-100 mx-auto mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Knowledge Discovery</h3>
            <p className="text-xs md:text-sm text-gray-600">Uncover insights from your data with AI analysis</p>
          </div>
          <div className="text-center">
            <div className="feature-icon bg-red-100 mx-auto mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Robust Operational Security</h3>
            <p className="text-xs md:text-sm text-gray-600">Enterprise-grade security for your AI operations</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12 bg-purple-100 rounded-lg my-8 md:my-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-bold mb-3 md:mb-4">Building futures, together.</h2>
            <p className="text-gray-600 mb-4 md:mb-6">
              We help organizations harness the power of AI to drive innovation and efficiency. Our platform enables
              teams to collaborate and create solutions that transform industries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-tl from-purple-400 to-purple-800 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:from-purple-700 hover:to-purple-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="/images/purple-octahedron.png"
                alt="Octa's 3D shape"
                width={180}
                height={180}
                className="w-36 h-36 md:w-auto md:h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-center md:text-left font-bold mb-6">AI software for elevated operations</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/images/character-laptop.png"
              alt="Person with lightbulb idea"
              width={250}
              height={250}
              className="w-48 h-48 md:w-full md:h-auto"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="font-bold mb-2">UNLOCK YOUR BEST WITH OCTA&apos;S</h3>
            <p className="text-gray-600 mb-4">
              Our AI platform helps you streamline operations, make better decisions, and boost productivity. The future
              of work is here, and it&apos;s powered by Octa&apos;s.
            </p>
            <Link
              href="/learn-more"
              className="text-purple-600 hover:underline flex items-center gap-1 justify-center md:justify-start"
            >
              See how we can help your business
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="font-bold mb-3 md:mb-4">Unlimited ideas for your projects</h2>
            <p className="text-gray-600 mb-4">
              With Octa&apos;s AI tools, you can generate unlimited ideas for your projects. Our AI helps you
              brainstorm, refine, and execute your vision.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/images/globe-computer.png"
              alt="Computer with globe hologram"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
