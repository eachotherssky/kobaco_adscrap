"use client"

import type React from "react"

interface GlassButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export function GlassButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: GlassButtonProps) {
  const baseClasses = "font-sans font-medium transition-all duration-300 border"

  const variantClasses = {
    primary: "cmp-button-primary glass-button-primary",
    secondary: "cmp-button-secondary glass-button-secondary",
  }

  const sizeClasses = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  )
}
