import Link from "next/link"

interface GlassCardProps {
  id: number
  title: string
  brand: string
  description: string
  author: string
  date: string
  likes: number
  thumbnail: string
  className?: string
  animationDelay?: string
}

export function GlassCard({
  id,
  title,
  brand,
  description,
  author,
  date,
  likes,
  thumbnail,
  className = "",
  animationDelay = "",
}: GlassCardProps) {
  return (
    <Link href={`/detail/${id}`}>
      <div className={`cmp-card glass-card p-6 cursor-pointer animate-card-enter ${animationDelay} ${className}`}>
        <div className="flex gap-4">
          {/* Compact 80x80 Thumbnail */}
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/30">
            <span className="text-xs text-gray-500 font-sans">IMG</span>
          </div>

          {/* Text-Centric Content */}
          <div className="flex-1 space-y-3">
            {/* Brand Tag */}
            <div className="cmp-tag-pill inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white border border-white/30">
              {brand}
            </div>

            {/* Serif Headline 22px */}
            <h3 className="font-serif text-[22px] font-semibold text-gray-800 line-clamp-2 leading-tight">{title}</h3>

            {/* Description */}
            <p className="font-sans text-sm text-gray-600 line-clamp-3 leading-relaxed">{description}</p>

            {/* Metadata Row */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-sans">
              <div className="flex items-center gap-3">
                <span>{author}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
