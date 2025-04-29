import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-xs md:text-sm text-gray-500 py-6 md:py-8 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">© 2025 Octa's Inc. All rights reserved.</div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link href="/terms" className="hover:text-purple-600 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-purple-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-purple-600 transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
