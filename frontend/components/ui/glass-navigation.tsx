"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function GlassNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`glass-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-display font-bold text-black">Ad Scrap</h1>
          </Link>

          {/* Minimal Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-body font-interface font-medium text-black hover:text-system-blue transition-colors duration-300 relative"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-system-blue transition-all duration-300 hover:w-full"></div>
            </Link>
            <Link
              href="/add"
              className="text-body font-interface font-medium text-black hover:text-system-blue transition-colors duration-300 relative"
            >
              Create
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-system-blue transition-all duration-300 hover:w-full"></div>
            </Link>
            <Link
              href="/about"
              className="text-body font-interface font-medium text-black hover:text-system-blue transition-colors duration-300 relative"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-system-blue transition-all duration-300 hover:w-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
