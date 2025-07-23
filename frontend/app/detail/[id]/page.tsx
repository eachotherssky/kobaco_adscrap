"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, Heart, Share2, LinkIcon, MessageCircle } from "lucide-react"
import Link from "next/link"
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button"
import { GlassNavigation } from "../../../components/ui/glass-navigation"

export default function DetailPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Chen",
      content:
        "Absolutely incredible product! The attention to detail and build quality is exceptional. I've been using these for my daily workouts and they still look and feel brand new after months of intensive use. The comfort level is unmatched.",
      createdAt: "2 days ago",
      likes: 12,
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      content:
        "Best investment I've made this year. The performance boost is immediately noticeable and the premium materials justify every penny. Highly recommend for anyone serious about quality and performance.",
      createdAt: "4 days ago",
      likes: 8,
    },
    {
      id: 3,
      author: "Emily Watson",
      content:
        "The design is absolutely stunning - sleek, modern, and perfectly suited for both professional and casual environments. Customer service was also outstanding when I had questions about specifications.",
      createdAt: "1 week ago",
      likes: 15,
    },
  ])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "You",
        content: newComment.trim(),
        createdAt: "Just now",
        likes: 0,
      }
      setComments([comment, ...comments])
      setNewComment("")
    }
  }

  const ad = {
    id: params.id,
    title: "Nike Air Max 270 React: Revolutionary Comfort Technology",
    brand: "Nike",
    url: "https://nike.com/air-max-270-react",
    description:
      "Experience the future of athletic footwear with Nike's groundbreaking Air Max 270 React technology. These premium running shoes combine the largest Air unit in Nike history with responsive React foam, delivering unparalleled comfort and energy return. The sleek, modern design features a breathable mesh upper with synthetic overlays for durability and support. Perfect for serious athletes and style-conscious individuals who demand the best in performance and aesthetics. The innovative sole design provides superior cushioning for high-impact activities while maintaining a lightweight feel that won't slow you down during your most demanding workouts. Engineered with precision and crafted with premium materials, these shoes represent the pinnacle of athletic footwear innovation.",
    author: "Sarah Chen",
    createdAt: "January 15, 2024",
    likes: 127,
    views: "2.3K",
  }

  return (
    <div className="min-h-screen bg-white">
      <GlassNavigation />

      {/* Content First - Detail at Top */}
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-8 pt-5 pb-10">
          <Link href="/">
            <button className="p-3 glass-card hover:scale-105 transition-all duration-300 text-black hover:text-system-blue">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Detail Section */}
        <div className="asymmetric-container">
          <div className="content-left">
            {/* Ad Header */}
            <div className="glass-card p-12 mb-8">
              <div className="flex gap-8">
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/50">
                  <span className="text-xs text-gray-400 font-interface font-medium">IMG</span>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="text-brand-tag">{ad.brand}</div>

                  <h1 className="text-display font-display">{ad.title}</h1>

                  <div className="flex flex-wrap items-center gap-8 text-metadata">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-interface font-semibold text-sm">SC</span>
                      </div>
                      <span>By {ad.author}</span>
                    </div>
                    <span>•</span>
                    <span>{ad.createdAt}</span>
                    <span>•</span>
                    <span>{ad.views} views</span>
                    <a
                      href={ad.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-system-blue hover:underline flex items-center gap-2 ml-auto transition-colors duration-300"
                    >
                      <LinkIcon className="w-4 h-4" />
                      View Original Product
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="glass-card p-12 mb-8">
              <div className="prose prose-xl max-w-none">
                <p className="text-body text-lg leading-relaxed first-letter:text-6xl first-letter:font-display first-letter:text-system-blue first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                  {ad.description}
                </p>
              </div>
            </div>

            {/* Comments Section */}
            <div className="glass-card p-12">
              <div className="flex items-center gap-4 mb-12">
                <MessageCircle className="w-8 h-8 text-system-blue" />
                <h2 className="text-section font-display">Discussion</h2>
                <span className="text-metadata">({comments.length} comments)</span>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-6 mb-16 relative">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts about this premium product..."
                  rows={4}
                  className="glass-input resize-none"
                />
                <LiquidGlassButton type="submit" disabled={!newComment.trim()}>
                  Post Comment
                </LiquidGlassButton>
                <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm font-mono">
                  Glass comment form
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-8">
                {comments.map((comment, index) => (
                  <div key={comment.id} className="relative">
                    <div className="glass-card p-8 border-l-4 border-system-blue">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-interface font-semibold text-sm">
                              {comment.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <span className="text-card-title font-interface font-semibold">{comment.author}</span>
                            <div className="text-metadata">{comment.createdAt}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-metadata">
                          <Heart className="w-4 h-4" />
                          <span>{comment.likes}</span>
                        </div>
                      </div>
                      <p className="text-body leading-relaxed text-lg">{comment.content}</p>
                    </div>
                    {index === 0 && (
                      <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm font-mono">
                        Glass comment cards
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Sidebar */}
          <div className="content-right">
            <div className="sticky top-24 space-y-8">
              {/* Like Button */}
              <div className="glass-card p-8 text-center space-y-6 relative">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-20 h-20 border-2 rounded-3xl flex items-center justify-center transition-all duration-300 mx-auto ${
                    isLiked
                      ? "glass-button-primary text-white scale-110"
                      : "glass-card border-system-blue text-system-blue hover:scale-105"
                  }`}
                >
                  <Heart className={`w-10 h-10 ${isLiked ? "fill-current" : ""}`} />
                </button>
                <div className="space-y-2">
                  <div className="text-display font-display">{isLiked ? ad.likes + 1 : ad.likes}</div>
                  <div className="text-metadata font-interface font-medium">Premium Likes</div>
                </div>
                <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm font-mono">
                  Liquid glass like
                </div>
              </div>

              {/* Share Options */}
              <div className="glass-card p-8 space-y-6">
                <h3 className="text-card-title font-display">Share Premium Ad</h3>
                <div className="space-y-4">
                  <LiquidGlassButton variant="secondary" className="w-full flex items-center justify-center gap-3">
                    <Share2 className="w-5 h-5" />
                    Copy Link
                  </LiquidGlassButton>
                  <LiquidGlassButton variant="primary" className="w-full flex items-center justify-center gap-3">
                    <span className="w-5 h-5 bg-white rounded-lg text-system-blue text-xs flex items-center justify-center font-bold">
                      T
                    </span>
                    Share on Twitter
                  </LiquidGlassButton>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="glass-card p-8 space-y-6">
                <h3 className="text-card-title font-display">Engagement</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body">Views</span>
                    <span className="text-card-title font-display">{ad.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body">Comments</span>
                    <span className="text-card-title font-display">{comments.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body">Shares</span>
                    <span className="text-card-title font-display">34</span>
                  </div>
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
        Content First: Detail visible immediately → Single column mobile
      </div>
    </div>
  )
}
