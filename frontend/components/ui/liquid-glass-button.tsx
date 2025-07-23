"use client"

import type React from "react"

interface LiquidGlassButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export function LiquidGlassButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: LiquidGlassButtonProps) {
  const baseClasses = "font-interface transition-all duration-300 cursor-pointer"

  const variantClasses = {
    primary: "cmp-button-liquid glass-button-primary",
    secondary: "cmp-button-liquid glass-button-secondary",
  }

  const sizeClasses = {
    default: "px-8 py-3 text-base",
    large: "px-12 py-4 text-lg",
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
