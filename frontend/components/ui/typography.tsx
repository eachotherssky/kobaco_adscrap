import type React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function HeadlineSerif({ children, className = "" }: TypographyProps) {
  return <h1 className={`font-serif text-3xl lg:text-4xl font-normal text-[#222] ${className}`}>{children}</h1>
}

export function HeadlineLarge({ children, className = "" }: TypographyProps) {
  return <h2 className={`font-serif text-2xl lg:text-3xl font-normal text-[#222] ${className}`}>{children}</h2>
}

export function BodyText({ children, className = "" }: TypographyProps) {
  return <p className={`font-sans text-base text-[#222] leading-relaxed ${className}`}>{children}</p>
}

export function Caption({ children, className = "" }: TypographyProps) {
  return <span className={`font-sans text-sm text-[#666] ${className}`}>{children}</span>
}
