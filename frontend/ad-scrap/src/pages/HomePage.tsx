import { useEffect, useState } from 'react';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function HomePage() {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, 'posts'));
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    })();
  }, []);

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">최근 등록된 광고</h2>

      <ul className="space-y-2">
        {posts.map(post => (
          <li
            key={post.id}
            className="rounded border p-3 hover:bg-muted/60 transition-colors"
          >
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              {post.title}
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              작성자: {post.author ?? '알 수 없음'}
            </p>
          </li>
        ))}

        {posts.length === 0 && (
          <li className="text-sm text-muted-foreground">
            아직 게시물이 없습니다.
          </li>
        )}
      </ul>
    </section>
  );
}
