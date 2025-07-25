import { useState } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { useAuth } from '@/hooks/useAuth'; // 로그인 상태 훅 (이미 작성된 것으로 가정)

const db = getFirestore();

export default function NewPost() {
  const user = useAuth();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSave = async () => {
    if (!user) return alert('로그인이 필요합니다.');
    if (!title.trim() || !url.trim()) return alert('제목과 URL을 입력하세요.');

    await addDoc(collection(db, 'posts'), {
      title,
      url,
      author: user.email ?? '익명',
      authorUid: user.uid,
      createdAt: serverTimestamp(),
    });

    setTitle('');
    setUrl('');
    alert('저장 완료');
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">새 광고 스크랩</h2>

      <input
        className="w-full rounded border px-3 py-2 text-sm"
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="w-full rounded border px-3 py-2 text-sm"
        placeholder="광고 URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />

      <button
        className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 disabled:opacity-50"
        onClick={handleSave}
        disabled={!title || !url}
      >
        저장
      </button>
    </section>
  );
}
