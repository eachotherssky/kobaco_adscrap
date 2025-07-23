import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ad Scrap — Alture × Liquid Glass Design",
  description:
    "A sophisticated ad platform combining Alture's typography-first aesthetic with Apple's Liquid Glass design language",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-interface antialiased">{children}</body>
    </html>
  )
}
