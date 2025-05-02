"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
}

export const Marquee = ({ className, reverse, pauseOnHover = false, children }: MarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    if (!marqueeRef.current) return

    const calculateWidth = () => {
      if (!marqueeRef.current) return
      const firstChild = marqueeRef.current.querySelector("[data-marquee-item]")
      if (firstChild) {
        const items = marqueeRef.current.querySelectorAll("[data-marquee-item]")
        let totalWidth = 0
        items.forEach((item) => {
          totalWidth += (item as HTMLElement).offsetWidth
        })
        setContentWidth(totalWidth)
      }
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [children])

  return (
    <div className={cn("flex w-full overflow-hidden [--gap:1rem] [--duration:40s]", className)}>
      <div
        ref={marqueeRef}
        className={cn(
          "flex min-w-full shrink-0 gap-[--gap] py-4",
          "animate-[marquee_var(--duration)_linear_infinite]",
          reverse && "animate-[marqueeReverse_var(--duration)_linear_infinite]",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} data-marquee-item className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {contentWidth > 0 && (
        <div
          aria-hidden="true"
          className={cn(
            "flex min-w-full shrink-0 gap-[--gap] py-4",
            "animate-[marquee_var(--duration)_linear_infinite]",
            reverse && "animate-[marqueeReverse_var(--duration)_linear_infinite]",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {React.Children.map(children, (child, i) => (
            <div key={i + "clone"} data-marquee-item className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
