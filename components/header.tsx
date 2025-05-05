"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/octahaidra-logo.png"
              alt="Octahaidra Logo"
              width={100}
              height={100}
              className="w-26 h-26"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="/solutions" className="text-sm hover:text-purple-600 transition-colors">
            Solutions
          </Link>
          <Link href="/services" className="text-sm hover:text-purple-600 transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="text-sm hover:text-purple-600 transition-colors">
            Pricing
          </Link>
          <Link href="/about-us" className="text-sm hover:text-purple-600 transition-colors">
            About Us
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login" className="text-sm hover:text-purple-600 transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-gradient-to-tl from-purple-400 to-purple-800 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:from-purple-700 hover:to-purple-500 transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fadeIn">
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className="py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/services"
              className="py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about-us"
              className="py-2 px-4 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="flex gap-2 mt-4 px-4">
              <Link
                href="/login"
                className="flex-1 text-center py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex-1 text-center py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
