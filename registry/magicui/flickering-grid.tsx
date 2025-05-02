"use client"

import { useEffect, useRef, useState } from "react"

interface FlickeringGridProps {
  className?: string
  squareSize?: number
  gridGap?: number
  color?: string
  maxOpacity?: number
  flickerChance?: number
  height?: number
  width?: number
}

export function FlickeringGrid({
  className = "",
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [squares, setSquares] = useState<{ x: number; y: number; opacity: number }[]>([])

  useEffect(() => {
    // Calculate the number of squares that can fit in the canvas
    const totalSize = squareSize + gridGap
    const cols = Math.floor(width / totalSize)
    const rows = Math.floor(height / totalSize)

    // Create the initial grid of squares
    const initialSquares = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        initialSquares.push({
          x: j * totalSize + gridGap / 2,
          y: i * totalSize + gridGap / 2,
          opacity: Math.random() * maxOpacity,
        })
      }
    }
    setSquares(initialSquares)

    // Set up the animation loop
    const interval = setInterval(() => {
      setSquares((prevSquares) =>
        prevSquares.map((square) => {
          // Only change opacity if random number is less than flickerChance
          if (Math.random() < flickerChance) {
            return { ...square, opacity: Math.random() * maxOpacity }
          }
          return square
        }),
      )
    }, 100)

    return () => clearInterval(interval)
  }, [squareSize, gridGap, maxOpacity, flickerChance, height, width])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear the canvas
    ctx.clearRect(0, 0, width, height)

    // Draw each square
    squares.forEach((square) => {
      ctx.fillStyle = color
      ctx.globalAlpha = square.opacity
      ctx.fillRect(square.x, square.y, squareSize, squareSize)
    })
  }, [squares, color, squareSize, width, height])

  return <canvas ref={canvasRef} width={width} height={height} className={className} />
}
