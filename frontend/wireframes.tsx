"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Search, Heart, ArrowLeft } from "lucide-react"

export default function Component() {
  const [selectedFrame, setSelectedFrame] = useState("home")
  const [selectedBreakpoint, setSelectedBreakpoint] = useState("mobile")

  const frames = [
    { id: "home", name: "Home" },
    { id: "add-ad", name: "Add Ad" },
    { id: "detail", name: "Detail" },
    { id: "settings", name: "Settings" },
  ]

  const breakpoints = [
    { id: "mobile", name: "Mobile (375×812)", width: "375px", height: "812px" },
    { id: "desktop", name: "Desktop (1440×1024)", width: "1440px", height: "1024px" },
  ]

  const WireframeBox = ({
    children,
    className = "",
    annotation,
  }: { children: React.ReactNode; className?: string; annotation?: string }) => (
    <div className={`relative border-2 border-gray-400 bg-gray-100 ${className}`}>
      {children}
      {annotation && (
        <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded shadow-sm font-mono">
          {annotation}
        </div>
      )}
    </div>
  )

  const MobileHome = () => (
    <div className="w-full h-full bg-white p-4 space-y-4">
      {/* Header */}
      <div className="space-y-4">
        <WireframeBox className="h-12 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Ad Scrap</span>
        </WireframeBox>

        {/* Search Bar */}
        <WireframeBox className="h-12 flex items-center px-4 space-x-2" annotation="tap to search">
          <Search className="w-4 h-4 text-gray-500" />
          <span className="font-mono text-gray-500 text-sm">Search ads...</span>
        </WireframeBox>
      </div>

      {/* Plus Button */}
      <div className="flex justify-end">
        <WireframeBox className="w-12 h-12 rounded-full flex items-center justify-center" annotation="tap to add">
          <Plus className="w-6 h-6 text-gray-600" />
        </WireframeBox>
      </div>

      {/* Card List */}
      <div className="space-y-4 flex-1">
        {[1, 2, 3, 4].map((i) => (
          <WireframeBox key={i} className="h-24 p-4 space-y-2" annotation={i === 1 ? "tap to open detail" : undefined}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="w-32 h-4 bg-gray-300"></div>
                <div className="w-20 h-3 bg-gray-300"></div>
              </div>
              <div className="w-16 h-16 bg-gray-300"></div>
            </div>
            <div className="w-full h-3 bg-gray-200"></div>
          </WireframeBox>
        ))}
      </div>
    </div>
  )

  const DesktopHome = () => (
    <div className="w-full h-full bg-white p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <WireframeBox className="h-16 w-48 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Ad Scrap</span>
        </WireframeBox>

        <div className="flex items-center space-x-4">
          <WireframeBox className="h-12 w-80 flex items-center px-4 space-x-2" annotation="click to search">
            <Search className="w-4 h-4 text-gray-500" />
            <span className="font-mono text-gray-500 text-sm">Search ads...</span>
          </WireframeBox>

          <WireframeBox className="w-12 h-12 rounded-full flex items-center justify-center" annotation="click to add">
            <Plus className="w-6 h-6 text-gray-600" />
          </WireframeBox>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 gap-6 flex-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <WireframeBox
            key={i}
            className="h-48 p-4 space-y-3"
            annotation={i === 1 ? "click to open detail" : undefined}
          >
            <div className="w-full h-24 bg-gray-300"></div>
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-300"></div>
              <div className="w-3/4 h-3 bg-gray-300"></div>
              <div className="w-1/2 h-3 bg-gray-200"></div>
            </div>
          </WireframeBox>
        ))}
      </div>
    </div>
  )

  const MobileAddAd = () => (
    <div className="w-full h-full bg-white p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <WireframeBox className="w-10 h-10 flex items-center justify-center" annotation="tap to go back">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </WireframeBox>
        <WireframeBox className="h-12 flex-1 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Add Ad</span>
        </WireframeBox>
      </div>

      {/* Form */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="w-16 h-4 bg-gray-400"></div>
          <WireframeBox className="h-12 flex items-center px-4" annotation="tap to input URL">
            <span className="font-mono text-gray-500 text-sm">Enter URL...</span>
          </WireframeBox>
        </div>

        <div className="space-y-2">
          <div className="w-12 h-4 bg-gray-400"></div>
          <WireframeBox className="h-12 flex items-center px-4" annotation="tap to input title">
            <span className="font-mono text-gray-500 text-sm">Enter title...</span>
          </WireframeBox>
        </div>

        <div className="space-y-2">
          <div className="w-20 h-4 bg-gray-400"></div>
          <WireframeBox className="h-12 flex items-center px-4" annotation="tap to select brand">
            <span className="font-mono text-gray-500 text-sm">Select brand...</span>
          </WireframeBox>
        </div>

        <div className="space-y-2">
          <div className="w-24 h-4 bg-gray-400"></div>
          <WireframeBox className="h-32 p-4" annotation="tap to add comment">
            <span className="font-mono text-gray-500 text-sm">Add your comment...</span>
          </WireframeBox>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-8">
        <WireframeBox className="h-12 bg-gray-800 flex items-center justify-center" annotation="tap to save">
          <span className="font-mono text-white">btn/primary - Save Ad</span>
        </WireframeBox>
      </div>
    </div>
  )

  const DesktopAddAd = () => (
    <div className="w-full h-full bg-white p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-6">
        <WireframeBox className="w-12 h-12 flex items-center justify-center" annotation="click to go back">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </WireframeBox>
        <WireframeBox className="h-16 w-48 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Add Ad</span>
        </WireframeBox>
      </div>

      {/* Form */}
      <div className="max-w-2xl space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="w-16 h-4 bg-gray-400"></div>
            <WireframeBox className="h-14 flex items-center px-4" annotation="click to input URL">
              <span className="font-mono text-gray-500">Enter URL...</span>
            </WireframeBox>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-4 bg-gray-400"></div>
            <WireframeBox className="h-14 flex items-center px-4" annotation="click to input title">
              <span className="font-mono text-gray-500">Enter title...</span>
            </WireframeBox>
          </div>
        </div>

        <div className="space-y-3">
          <div className="w-20 h-4 bg-gray-400"></div>
          <WireframeBox className="h-14 w-80 flex items-center px-4" annotation="click to select brand">
            <span className="font-mono text-gray-500">Select brand...</span>
          </WireframeBox>
        </div>

        <div className="space-y-3">
          <div className="w-24 h-4 bg-gray-400"></div>
          <WireframeBox className="h-40 p-4" annotation="click to add comment">
            <span className="font-mono text-gray-500">Add your comment...</span>
          </WireframeBox>
        </div>

        <WireframeBox className="h-14 w-48 bg-gray-800 flex items-center justify-center" annotation="click to save">
          <span className="font-mono text-white">btn/primary - Save Ad</span>
        </WireframeBox>
      </div>
    </div>
  )

  const MobileDetail = () => (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <div className="p-4 flex items-center space-x-4 border-b border-gray-200">
        <WireframeBox className="w-10 h-10 flex items-center justify-center" annotation="tap to go back">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </WireframeBox>
        <WireframeBox className="h-12 flex-1 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Ad Detail</span>
        </WireframeBox>
      </div>

      {/* Hero Image */}
      <WireframeBox className="h-48 m-4 flex items-center justify-center">
        <span className="font-mono text-gray-500">Hero Thumbnail Placeholder</span>
      </WireframeBox>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="w-full h-6 bg-gray-400"></div>
          <div className="flex space-x-4">
            <div className="w-20 h-4 bg-gray-300"></div>
            <div className="w-16 h-4 bg-gray-300"></div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-32 h-4 bg-gray-300"></div>
          <WireframeBox className="w-10 h-10 flex items-center justify-center" annotation="tap to like">
            <Heart className="w-5 h-5 text-gray-600" />
          </WireframeBox>
        </div>

        <div className="w-full h-16 bg-gray-200 p-3">
          <span className="font-mono text-gray-500 text-sm">User comment content...</span>
        </div>
      </div>

      {/* Comments */}
      <div className="p-4 space-y-4">
        <div className="w-24 h-5 bg-gray-400"></div>
        {[1, 2].map((i) => (
          <WireframeBox key={i} className="p-3 space-y-2">
            <div className="flex justify-between">
              <div className="w-20 h-3 bg-gray-400"></div>
              <div className="w-16 h-3 bg-gray-300"></div>
            </div>
            <div className="w-full h-4 bg-gray-200"></div>
          </WireframeBox>
        ))}
      </div>
    </div>
  )

  const DesktopDetail = () => (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <div className="p-8 flex items-center space-x-6 border-b border-gray-200">
        <WireframeBox className="w-12 h-12 flex items-center justify-center" annotation="click to go back">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </WireframeBox>
        <WireframeBox className="h-16 w-48 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Ad Detail</span>
        </WireframeBox>
      </div>

      <div className="p-8 grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <WireframeBox className="h-80 flex items-center justify-center">
            <span className="font-mono text-gray-500">Hero Thumbnail Placeholder</span>
          </WireframeBox>

          <div className="space-y-4">
            <div className="w-full h-8 bg-gray-400"></div>
            <div className="flex space-x-6">
              <div className="w-24 h-5 bg-gray-300"></div>
              <div className="w-20 h-5 bg-gray-300"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-40 h-5 bg-gray-300"></div>
              <WireframeBox className="w-12 h-12 flex items-center justify-center" annotation="click to like">
                <Heart className="w-6 h-6 text-gray-600" />
              </WireframeBox>
            </div>
          </div>

          <WireframeBox className="h-24 p-4">
            <span className="font-mono text-gray-500">User comment content...</span>
          </WireframeBox>
        </div>

        {/* Right Column - Comments */}
        <div className="space-y-6">
          <div className="w-32 h-6 bg-gray-400"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <WireframeBox key={i} className="p-4 space-y-3">
                <div className="flex justify-between">
                  <div className="w-24 h-4 bg-gray-400"></div>
                  <div className="w-20 h-3 bg-gray-300"></div>
                </div>
                <div className="w-full h-5 bg-gray-200"></div>
              </WireframeBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const MobileSettings = () => (
    <div className="w-full h-full bg-white p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <WireframeBox className="w-10 h-10 flex items-center justify-center" annotation="tap to go back">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </WireframeBox>
        <WireframeBox className="h-12 flex-1 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Settings</span>
        </WireframeBox>
      </div>

      {/* Settings Form */}
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="w-32 h-5 bg-gray-400"></div>
          <div className="flex space-x-3">
            <WireframeBox className="h-12 flex-1 flex items-center px-4" annotation="tap to edit nickname">
              <span className="font-mono text-gray-600">current_nickname</span>
            </WireframeBox>
            <WireframeBox className="h-12 w-20 bg-gray-800 flex items-center justify-center" annotation="tap to change">
              <span className="font-mono text-white text-sm">Change</span>
            </WireframeBox>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-28 h-5 bg-gray-400"></div>
          <WireframeBox className="h-12 flex items-center px-4" annotation="tap to toggle">
            <span className="font-mono text-gray-600">Dark Mode</span>
          </WireframeBox>
        </div>

        <div className="space-y-4">
          <div className="w-36 h-5 bg-gray-400"></div>
          <WireframeBox className="h-12 flex items-center px-4" annotation="tap to toggle">
            <span className="font-mono text-gray-600">Push Notifications</span>
          </WireframeBox>
        </div>
      </div>
    </div>
  )

  const DesktopSettings = () => (
    <div className="w-full h-full bg-white p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-6">
        <WireframeBox className="w-12 h-12 flex items-center justify-center" annotation="click to go back">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </WireframeBox>
        <WireframeBox className="h-16 w-48 flex items-center justify-center">
          <span className="font-mono text-gray-600">txt/heading - Settings</span>
        </WireframeBox>
      </div>

      {/* Settings Form */}
      <div className="max-w-2xl space-y-12">
        <div className="space-y-4">
          <div className="w-40 h-6 bg-gray-400"></div>
          <div className="flex space-x-4">
            <WireframeBox className="h-14 w-80 flex items-center px-4" annotation="click to edit nickname">
              <span className="font-mono text-gray-600">current_nickname</span>
            </WireframeBox>
            <WireframeBox
              className="h-14 w-24 bg-gray-800 flex items-center justify-center"
              annotation="click to change"
            >
              <span className="font-mono text-white">Change</span>
            </WireframeBox>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-32 h-6 bg-gray-400"></div>
          <WireframeBox className="h-14 w-80 flex items-center px-4" annotation="click to toggle">
            <span className="font-mono text-gray-600">Dark Mode</span>
          </WireframeBox>
        </div>

        <div className="space-y-4">
          <div className="w-44 h-6 bg-gray-400"></div>
          <WireframeBox className="h-14 w-80 flex items-center px-4" annotation="click to toggle">
            <span className="font-mono text-gray-600">Push Notifications</span>
          </WireframeBox>
        </div>
      </div>
    </div>
  )

  const renderFrame = () => {
    const isMobile = selectedBreakpoint === "mobile"

    switch (selectedFrame) {
      case "home":
        return isMobile ? <MobileHome /> : <DesktopHome />
      case "add-ad":
        return isMobile ? <MobileAddAd /> : <DesktopAddAd />
      case "detail":
        return isMobile ? <MobileDetail /> : <DesktopDetail />
      case "settings":
        return isMobile ? <MobileSettings /> : <DesktopSettings />
      default:
        return isMobile ? <MobileHome /> : <DesktopHome />
    }
  }

  const currentBreakpoint = breakpoints.find((bp) => bp.id === selectedBreakpoint)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Ad Scrap - Low-Fidelity Wireframes</h1>

          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Frame:</label>
              <div className="flex gap-2">
                {frames.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame.id)}
                    className={`px-3 py-1 text-sm rounded ${
                      selectedFrame === frame.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {frame.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Breakpoint:</label>
              <div className="flex gap-2">
                {breakpoints.map((bp) => (
                  <button
                    key={bp.id}
                    onClick={() => setSelectedBreakpoint(bp.id)}
                    className={`px-3 py-1 text-sm rounded ${
                      selectedBreakpoint === bp.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {bp.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wireframe Display */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-center">
            <div
              className="border-4 border-gray-800 bg-white overflow-hidden"
              style={{
                width: currentBreakpoint?.width,
                height: currentBreakpoint?.height,
                maxWidth: "100%",
                maxHeight: "80vh",
              }}
            >
              {renderFrame()}
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            {frames.find((f) => f.id === selectedFrame)?.name} - {currentBreakpoint?.name}
          </div>
        </div>

        {/* Design System Notes */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Design System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Spacing</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 8pt grid system</li>
                <li>• 16pt base padding</li>
                <li>• Consistent spacing units</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Typography</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• System fonts only</li>
                <li>• Monospace for labels</li>
                <li>• Systematic naming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Interactions</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Purple annotations</li>
                <li>• Clear tap/click areas</li>
                <li>• Auto Layout containers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
