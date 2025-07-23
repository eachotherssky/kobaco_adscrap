/* pages/detail/[id].tsx
   ───────────────────────────────────────────── */
import { useState, useEffect, type FormEvent } from "react"
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Heart,
  Share2,
  Link as LinkIcon,
  MessageCircle,
} from "lucide-react"

/* ---------- 1. SSG용 ID 목록 ---------- */
const IDS = ["1", "2", "3", "4", "5", "6"]

export const getStaticPaths: GetStaticPaths = () => ({
  paths: IDS.map((id) => ({ params: { id } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<{ id: string }> = ({
  params,
}) => ({
  props: { id: params!.id as string },
})

/* ---------- 2. 타입 선언 ---------- */
interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
  likes: number
}

/* ---------- 3. 페이지 컴포넌트 ---------- */
export default function DetailPage(
  { id }: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [isLiked, setIsLiked] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Sarah Chen",
      content: "Fantastic!",
      createdAt: "2 days ago",
      likes: 12,
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      content: "Great boost.",
      createdAt: "4 days ago",
      likes: 8,
    },
    {
      id: 3,
      author: "Emily Watson",
      content: "Amazing design.",
      createdAt: "1 week ago",
      likes: 15,
    },
  ])

  /* 예: 페이드-인 애니메이션 트리거 */
  useEffect(() => {
    /*  … 필요 시 구현 … */
  }, [])

  const ad = {
    id,
    brand: "Nike",
    title: "Nike Air Max 270 React: Revolutionary Comfort Technology",
    author: "Sarah Chen",
    createdAt: "January 15, 2024",
    views: "2.3K",
    url: "https://nike.com/air-max-270-react",
    description:
      "Experience the future of athletic footwear with Nike's groundbreaking Air Max 270 React technology...",
    likes: 127,
  }

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return
    const comment: Comment = {
      id: comments.length + 1,
      author: "You",
      content: newComment.trim(),
      createdAt: "Just now",
      likes: 0,
    }
    setComments([comment, ...comments])
    setNewComment("")
  }

  /* ---------- 4. JSX ---------- */
  return (
    <div className="min-h-screen bg-white font-interface antialiased">
      {/* ── 내비게이션 ───────────────────────── */}
      <nav className="glass-nav fixed top-0 w-full bg-white/50 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-display font-bold">Ad Scrap</h1>
          </Link>
          <Link href="/">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </nav>

      {/* ── 본문 ─────────────────────────────── */}
      <main className="pt-24 max-w-7xl mx-auto px-8 space-y-12">
        {/* 광고 헤더 */}
        <section className="glass-card p-8 rounded-2xl shadow-lg">
          <div className="flex gap-6">
            <div className="w-[60px] h-[60px] bg-gray-100 rounded-2xl flex items-center justify-center border border-white/50">
              <span className="text-xs text-gray-400">IMG</span>
            </div>
            <div className="flex-1 space-y-4">
              <div className="text-brand-tag font-semibold text-system-blue">
                {ad.brand}
              </div>
              <h1 className="text-3xl font-display">{ad.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span>By {ad.author}</span>•<span>{ad.createdAt}</span>•
                <span>{ad.views} views</span>
                <a
                  href={ad.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-system-blue hover:underline flex items-center gap-1"
                >
                  <LinkIcon className="w-4 h-4" /> View Original
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 설명 */}
        <section className="glass-card p-8 rounded-2xl shadow-lg prose prose-lg max-w-none">
          <p>{ad.description}</p>
        </section>

        {/* 좋아요 + 공유 */}
        <section className="flex flex-col md:flex-row gap-6">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`glass-button-primary rounded-3xl p-4 flex items-center justify-center text-white duration-300 ${
              isLiked ? "scale-110" : ""
            }`}
          >
            <Heart className="w-6 h-6" /> {isLiked ? ad.likes + 1 : ad.likes}
          </button>

          <div className="flex gap-4">
            <button className="glass-button-secondary p-4 rounded-2xl flex items-center gap-2">
              <Share2 className="w-5 h-5" /> Copy Link
            </button>
            <button className="glass-button-secondary p-4 rounded-2xl flex items-center gap-2">
              <span className="w-5 h-5 bg-white rounded text-system-blue flex items-center justify-center">
                T
              </span>
              Tweet
            </button>
          </div>
        </section>

        {/* 댓글 */}
        <section className="space-y-8">
          <h2 className="text-2xl font-display flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-system-blue" /> Discussion (
            {comments.length})
          </h2>

          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              placeholder="Share your thoughts..."
              className="glass-input w-full p-4 rounded-lg resize-none"
            />
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="glass-button-primary px-6 py-2 rounded-lg"
            >
              Post Comment
            </button>
          </form>

          {comments.map((c) => (
            <div
              key={c.id}
              className="glass-card p-6 rounded-2xl shadow-lg space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{c.author}</span>
                <span className="text-gray-500">{c.createdAt}</span>
              </div>
              <p>{c.content}</p>
              <div className="flex items-center gap-1 text-system-blue">
                <Heart className="w-4 h-4" /> {c.likes}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
