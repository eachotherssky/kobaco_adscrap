// src/pages/HomePage.tsx
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  type DocumentData,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function HomePage() {
  const [posts, setPosts] = useState<DocumentData[] | null>(null); // null = 로딩

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, 'posts'));
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    })();
  }, []);

  return (
    <section className="p-6 sm:p-8">
      <h2 className="mb-6 text-section">최근 등록된 광고</h2>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1) 로딩 중 – 글래스 스켈레톤 */}
        {posts === null &&
          Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="glass-card animate-glass-shimmer h-48" />
          ))}

        {/* 2) 게시글 목록 */}
        {posts?.map(post => (
          <li key={post.id} className="glass-card p-6 space-y-2">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-card-title hover:underline"
            >
              {post.title}
            </a>
            <p className="text-metadata">
              작성자: {post.author ?? '알 수 없음'}
            </p>

            {post.tags && (
              <ul className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((t: string) => (
                  <li
                    key={t}
                    className="text-brand-tag bg-system-blue/10 px-2 py-0.5 rounded-full"
                  >
                    #{t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* 3) 게시물이 전혀 없을 때 */}
        {posts?.length === 0 && (
          <li className="glass-card p-6 h-48 flex items-center justify-center">
            <p className="text-body">아직 게시물이 없습니다.</p>
          </li>
        )}
      </ul>
    </section>
  );
}
