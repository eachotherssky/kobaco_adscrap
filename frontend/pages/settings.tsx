"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [nickname, setNickname] = useState("current_nickname")
  const [isEditing, setIsEditing] = useState(false)
  const [tempNickname, setTempNickname] = useState(nickname)
  const [darkMode, setDarkMode] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  const handleNicknameChange = () => {
    if (isEditing) {
      setNickname(tempNickname)
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  const handleCancel = () => {
    setTempNickname(nickname)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto lg:max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 lg:mb-8">
          <Link href="/">
            <button className="w-10 h-10 bg-white border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors lg:w-12 lg:h-12">
              <ArrowLeft className="w-5 h-5 text-gray-600 lg:w-6 lg:h-6" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">Settings</h1>
        </div>

        {/* Settings Form */}
        <div className="space-y-8 lg:space-y-12">
          {/* Nickname Setting */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Current Nickname</h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={isEditing ? tempNickname : nickname}
                onChange={(e) => setTempNickname(e.target.value)}
                disabled={!isEditing}
                className={`flex-1 px-4 py-3 border-2 text-gray-900 focus:outline-none lg:py-4 lg:max-w-80 ${
                  isEditing ? "border-gray-500 bg-white" : "border-gray-300 bg-gray-50"
                }`}
              />
              <button
                onClick={handleNicknameChange}
                className="px-6 py-3 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors lg:py-4"
              >
                {isEditing ? "Save" : "Change"}
              </button>
              {isEditing && (
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gray-300 text-gray-700 font-medium hover:bg-gray-400 transition-colors lg:py-4"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>

          {/* Dark Mode Setting */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Dark Mode</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-full px-4 py-3 border-2 text-left font-medium transition-colors lg:py-4 lg:max-w-80 ${
                darkMode
                  ? "bg-gray-800 border-gray-800 text-white"
                  : "bg-white border-gray-300 text-gray-900 hover:border-gray-500"
              }`}
            >
              {darkMode ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Push Notifications Setting */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Push Notifications</h2>
            <button
              onClick={() => setPushNotifications(!pushNotifications)}
              className={`w-full px-4 py-3 border-2 text-left font-medium transition-colors lg:py-4 lg:max-w-80 ${
                pushNotifications
                  ? "bg-gray-800 border-gray-800 text-white"
                  : "bg-white border-gray-300 text-gray-900 hover:border-gray-500"
              }`}
            >
              {pushNotifications ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Additional Settings */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Account</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 text-left hover:border-gray-500 transition-colors lg:py-4 lg:max-w-80">
                Export Data
              </button>
              <button className="w-full px-4 py-3 border-2 border-red-300 bg-red-50 text-red-700 text-left hover:border-red-500 transition-colors lg:py-4 lg:max-w-80">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
