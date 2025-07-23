import Link from "next/link"
import { Caption } from "./typography"

interface CardProps {
  id: number
  title: string
  brand: string
  comment: string
  thumbnail: string
  className?: string
}

export function Card({ id, title, brand, comment, thumbnail, className = "" }: CardProps) {
  return (
    <Link href={`/detail/${id}`}>
      <div
        className={`cmp-card group bg-white border border-[#E5E5E5] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${className}`}
      >
        {/* Image */}
        <div className="aspect-[4/3] bg-[#F0F0F0] border-b border-[#E5E5E5] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-[#999] text-sm font-sans">IMG</div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-normal text-[#222] line-clamp-2 group-hover:text-[#FF3B30] transition-colors">
              {title}
            </h3>
            <div className="cmp-tag inline-block bg-[#FF3B30] text-white px-2 py-1 text-xs font-sans font-medium">
              {brand}
            </div>
          </div>
          <Caption className="line-clamp-3">{comment}</Caption>
        </div>
      </div>
    </Link>
  )
}
