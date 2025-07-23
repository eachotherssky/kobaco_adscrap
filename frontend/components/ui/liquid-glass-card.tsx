"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface LiquidGlassCardProps {
  id: number
  title: string
  brand: string
  description: string
  author: string
  date: string
  likes: number
  className?: string
  delay?: number
}

export function LiquidGlassCard({
  id,
  title,
  brand,
  description,
  author,
  date,
  likes,
  className = "",
  delay = 0,
}: LiquidGlassCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Link href={`/detail/${id}`}>
      <div
        className={`cmp-glass-card glass-card p-8 cursor-pointer reveal-on-scroll animate-glass-shimmer ${
          isVisible ? "revealed" : ""
        } ${className}`}
      >
        <div className="flex gap-6">
          {/* Minimal 60x60 Thumbnail */}
          <div className="w-[60px] h-[60px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/50">
            <span className="text-xs text-gray-400 font-interface font-medium">IMG</span>
          </div>

          {/* Text-First Content */}
          <div className="flex-1 space-y-4">
            {/* Brand Tag */}
            <div className="text-brand-tag">{brand}</div>

            {/* Ad Title */}
            <h3 className="text-card-title line-clamp-2">{title}</h3>

            {/* Description */}
            <p className="text-body line-clamp-3">{description}</p>

            {/* Metadata Row */}
            <div className="flex items-center justify-between text-metadata">
              <div className="flex items-center gap-4">
                <span>{author}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-system-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
