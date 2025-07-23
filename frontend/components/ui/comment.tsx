import { Caption } from "./typography"

interface CommentProps {
  author: string
  content: string
  createdAt: string
  className?: string
}

export function Comment({ author, content, createdAt, className = "" }: CommentProps) {
  return (
    <div className={`cmp-comment bg-white border border-[#E5E5E5] p-4 space-y-3 ${className}`}>
      <div className="flex justify-between items-start">
        <span className="font-sans text-sm font-medium text-[#222]">{author}</span>
        <Caption>{createdAt}</Caption>
      </div>
      <p className="font-sans text-base text-[#222] leading-relaxed">{content}</p>
    </div>
  )
}
