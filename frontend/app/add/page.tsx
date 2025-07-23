"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LiquidGlassInput, LiquidGlassTextarea } from "@/components/ui/liquid-glass-input"
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button"
import { GlassNavigation } from "../../components/ui/glass-navigation"

export default function AddAdPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    brand: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating premium ad:", formData)
    router.push("/")
  }

  const brands = ["Apple", "Nike", "Tesla", "Samsung", "Google", "Microsoft", "Luxury Brands", "Other"]

  // Live Preview Card
  const PreviewCard = () => (
    <div className="glass-card p-8 sticky top-24">
      <h3 className="text-section font-display mb-8">Live Preview</h3>

      <div className="flex gap-6">
        <div className="w-[60px] h-[60px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/50">
          <span className="text-xs text-gray-400 font-interface font-medium">{formData.url ? "IMG" : "—"}</span>
        </div>

        <div className="flex-1 space-y-4">
          {formData.brand && <div className="text-brand-tag">{formData.brand}</div>}

          <h4 className="text-card-title line-clamp-2">{formData.title || "Enter your premium ad title here..."}</h4>

          <p className="text-body line-clamp-3">
            {formData.description ||
              "Add a compelling description that highlights the key features, benefits, and unique value proposition of your premium product..."}
          </p>

          <div className="flex items-center justify-between text-metadata">
            <div className="flex items-center gap-4">
              <span>You</span>
              <span>•</span>
              <span>Just now</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-system-blue" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <GlassNavigation />

      {/* Content First - Form at Top */}
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-8 pt-5 pb-10">
          <Link href="/">
            <button className="p-3 glass-card hover:scale-105 transition-all duration-300 text-black hover:text-system-blue">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Form Section */}
        <div className="asymmetric-container">
          <div className="content-left">
            <div className="glass-card p-12">
              <div className="mb-8">
                <h1 className="text-display font-display mb-4">Create Premium Advertisement</h1>
                <p className="text-body">Showcase your premium product with our sophisticated ad creation platform.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <LiquidGlassInput
                  label="Product URL"
                  placeholder="https://example.com/premium-product"
                  value={formData.url}
                  onChange={(value) => setFormData((prev) => ({ ...prev, url: value }))}
                  type="url"
                  required
                />

                <LiquidGlassInput
                  label="Advertisement Title"
                  placeholder="Enter a compelling product title that captures attention"
                  value={formData.title}
                  onChange={(value) => setFormData((prev) => ({ ...prev, title: value }))}
                  required
                />

                <div className="space-y-3">
                  <label className="block text-body font-interface font-semibold text-black">
                    Brand Category <span className="text-system-blue ml-2">*</span>
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData((prev) => ({ ...prev, brand: e.target.value }))}
                    required
                    className="glass-input"
                  >
                    <option value="">Select premium brand category...</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <LiquidGlassTextarea
                  label="Product Description"
                  placeholder="Craft a compelling description that highlights unique features, benefits, and what makes this product exceptional in the premium market..."
                  value={formData.description}
                  onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
                  rows={6}
                  maxLength={500}
                />

                <div className="pt-8">
                  <LiquidGlassButton type="submit" size="large" className="px-16">
                    Publish Premium Ad
                  </LiquidGlassButton>
                </div>
              </form>
            </div>
          </div>

          <div className="content-right relative">
            <PreviewCard />
            <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm font-mono">
              Real-time glass preview
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </main>

      {/* Responsive Behavior Annotation */}
      <div className="fixed bottom-8 right-8 bg-purple-500 text-white text-xs px-4 py-3 rounded-xl shadow-lg font-mono">
        Content First: Form visible immediately → Stacked mobile
      </div>
    </div>
  )
}
