"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import Link from "next/link"
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button"
import { GlassNavigation } from "../components/ui/glass-navigation"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const mockAds = [
    {
      id: 1,
      title: "Nike Air Max 270 React: Revolutionary Comfort Technology",
      brand: "Nike",
      description:
        "Experience next-level comfort with Nike's latest Air Max technology. These running shoes feature responsive React foam and a sleek design perfect for both athletic performance and street style. Built for runners who demand both comfort and style in their daily training.",
      author: "Sarah Chen",
      date: "Jan 15, 2024",
      likes: 127,
    },
    {
      id: 2,
      title: "iPhone 15 Pro Max: Titanium Design Meets Pro Performance",
      brand: "Apple",
      description:
        "The most advanced iPhone ever created, featuring aerospace-grade titanium construction, A17 Pro chip, and revolutionary camera system with 5x optical zoom capabilities. Perfect for professionals and content creators who demand the absolute best in mobile technology.",
      author: "Marcus Rodriguez",
      date: "Jan 12, 2024",
      likes: 89,
    },
    {
      id: 3,
      title: "MacBook Pro M3: Unleash Your Creative Potential",
      brand: "Apple",
      description:
        "Built for professionals who demand the best. The new MacBook Pro with M3 chip delivers unprecedented performance for video editing, 3D rendering, and software development. Experience the future of computing with industry-leading battery life and stunning Liquid Retina XDR display.",
      author: "Emily Watson",
      date: "Jan 10, 2024",
      likes: 156,
    },
    {
      id: 4,
      title: "Tesla Model S Plaid: Electric Performance Redefined",
      brand: "Tesla",
      description:
        "The quickest accelerating production car ever made. With tri-motor all-wheel drive and over 1,000 horsepower, the Model S Plaid sets new standards for electric vehicles and sustainable transportation. Zero to sixty in under 2 seconds with a 400+ mile range.",
      author: "David Kim",
      date: "Jan 8, 2024",
      likes: 203,
    },
    {
      id: 5,
      title: "AirPods Pro 2nd Gen: Spatial Audio Excellence",
      brand: "Apple",
      description:
        "Immersive listening experience with adaptive transparency, personalized spatial audio, and up to 2x more active noise cancellation than the previous generation. Perfect for music lovers and professionals who need premium audio quality.",
      author: "Lisa Park",
      date: "Jan 5, 2024",
      likes: 94,
    },
    {
      id: 6,
      title: "Samsung Galaxy S24 Ultra: AI-Powered Photography",
      brand: "Samsung",
      description:
        "Revolutionary smartphone featuring advanced AI photography, S Pen integration, and the most powerful mobile processor. Perfect for content creators and business professionals who need cutting-edge technology in their daily workflow.",
      author: "Alex Thompson",
      date: "Jan 3, 2024",
      likes: 78,
    },
  ]

  const filteredAds = mockAds.filter(
    (ad) =>
      ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.brand.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredAds.length / 4)
  const currentAds = filteredAds.slice((currentPage - 1) * 4, currentPage * 4)

  return (
    <div className="min-h-screen bg-white">
      <GlassNavigation />

      {/* Content First - Cards at Top */}
      <main className="pt-20">
        {/* Top Section with Search & Add Button */}
        <div className="max-w-7xl mx-auto px-8 pt-5 pb-10">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="relative w-96">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search premium collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input pl-14"
              />
            </div>

            {/* Add Button */}
            <Link href="/add">
              <LiquidGlassButton className="flex items-center gap-3">
                <Plus className="w-5 h-5" />
                Create Ad
              </LiquidGlassButton>
            </Link>
          </div>
        </div>

        {/* Cards Grid - Immediate Visibility */}
        <div className="asymmetric-container">
          <div className="content-left">
            {/* Cards Grid */}
            <div className="space-y-8 relative">
              {currentAds.map((ad, index) => (
                <div key={ad.id} className="relative">
                  <LiquidGlassCard {...ad} delay={index * 100} />
                  {index === 0 && (
                    <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm font-mono">
                      Visible on load—no scroll needed
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-16">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-12 h-12 rounded-2xl text-sm font-interface font-semibold transition-all duration-300 ${
                      currentPage === i + 1
                        ? "glass-button-primary text-white"
                        : "glass-card text-black hover:scale-105"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

            {filteredAds.length === 0 && (
              <div className="text-center py-20">
                <div className="glass-card p-16 max-w-md mx-auto">
                  <h3 className="text-section font-display mb-4">No collections found</h3>
                  <p className="text-body">Try adjusting your search terms or explore all available collections.</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="content-right">
            <div className="sticky top-32 space-y-8">
              {/* Stats Card */}
              <div className="glass-card p-8 relative">
                <h3 className="text-card-title font-display mb-6">Collection Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body">Total Ads</span>
                    <span className="text-card-title font-display">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body">Premium Brands</span>
                    <span className="text-card-title font-display">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body">This Month</span>
                    <span className="text-card-title font-display">18</span>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm font-mono">
                  Sidebar aligns with cards
                </div>
              </div>

              {/* Featured Brands */}
              <div className="glass-card p-8">
                <h3 className="text-card-title font-display mb-6">Featured Brands</h3>
                <div className="space-y-3">
                  {["Apple", "Nike", "Tesla", "Samsung"].map((brand) => (
                    <div key={brand} className="text-brand-tag">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card p-8">
                <h3 className="text-card-title font-display mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link href="/add">
                    <LiquidGlassButton variant="secondary" className="w-full">
                      Create New Ad
                    </LiquidGlassButton>
                  </Link>
                  <LiquidGlassButton variant="secondary" className="w-full">
                    Browse Categories
                  </LiquidGlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </main>

      {/* Responsive Behavior Annotation */}
      <div className="fixed bottom-8 right-8 bg-purple-500 text-white text-xs px-4 py-3 rounded-xl shadow-lg font-mono">
        Content First: Cards visible immediately → Single column mobile
      </div>
    </div>
  )
}
