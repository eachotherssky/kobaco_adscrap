"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "font-sans font-medium transition-all duration-200 border"

  const variantClasses = {
    primary:
      "cmp-button-primary bg-[#FF3B30] text-white border-[#FF3B30] hover:bg-[#E6342A] hover:border-[#E6342A] disabled:bg-[#CCC] disabled:border-[#CCC]",
    secondary: "cmp-button-secondary bg-white text-[#222] border-[#E5E5E5] hover:border-[#CCC] hover:bg-[#F9F9F9]",
  }

  const sizeClasses = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}
