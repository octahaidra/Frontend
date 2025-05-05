import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FlickeringGridDemo } from "@/components/flickering-grid-demo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Octa's - AI Era Solutions",
  description: "Unlock new possibilities with Octa's AI solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
