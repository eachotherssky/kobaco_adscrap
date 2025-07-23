"use client"

import type React from "react"

interface CleanButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export function CleanButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: CleanButtonProps) {
  const baseClasses = "font-sans transition-all duration-150"

  const variantClasses = {
    primary: "cmp-button-primary button-primary",
    secondary: "cmp-button-secondary button-secondary",
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
