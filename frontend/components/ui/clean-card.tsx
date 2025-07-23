import Link from "next/link"

interface CleanCardProps {
  id: number
  title: string
  brand: string
  description: string
  author: string
  date: string
  likes: number
  className?: string
}

export function CleanCard({ id, title, brand, description, author, date, likes, className = "" }: CleanCardProps) {
  return (
    <Link href={`/detail/${id}`}>
      <div className={`cmp-card-clean card-clean cursor-pointer ${className}`}>
        <div className="flex gap-4">
          {/* Minimal 50x50 Thumbnail */}
          <div className="w-[50px] h-[50px] bg-gray-50 border border-light rounded-lg flex-shrink-0 flex items-center justify-center">
            <span className="text-xs text-muted font-sans">IMG</span>
          </div>

          {/* Text-Dominant Content (80%) */}
          <div className="flex-1 space-y-3">
            {/* Card Title */}
            <h3 className="text-card-title line-clamp-2">{title}</h3>

            {/* Brand Tag */}
            <div className="tag-accent">{brand}</div>

            {/* Description */}
            <p className="text-body line-clamp-3">{description}</p>

            {/* Metadata Row */}
            <div className="flex items-center justify-between text-metadata">
              <div className="flex items-center gap-3">
                <span>{author}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
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
