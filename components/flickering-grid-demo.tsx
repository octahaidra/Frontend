"use client"

import { FlickeringGrid } from "@/registry/magicui/flickering-grid"

export function FlickeringGridDemo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-100/50 via-blue-50/30 to-transparent z-0"></div>

      {/* Second gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-blue-100/20 z-0"></div>

      {/* Flickering grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 w-full h-full mix-blend-soft-light"
        squareSize={4}
        gridGap={6}
        color="#7c3aed"
        maxOpacity={0.1}
        flickerChance={0.1}
        height={2000}
        width={2000}
      />
    </div>
  )
}
