/**
 * Firebase 초기화·헬퍼 모음
 * - 단 한 번만 초기화되도록 싱글톤 패턴
 * - 모든 서비스(db·auth) 객체를 여기서 export 해서 재사용
 * - CRUD 헬퍼는 “posts” 컬렉션 전용 최소 구현
 */

import { initializeApp, type FirebaseOptions } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  type DocumentData,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

/* ───────────────────────────────
   1. Firebase App 초기화 (싱글톤)
   ─────────────────────────────── */
const firebaseConfig: FirebaseOptions = {
  apiKey:        import.meta.env.VITE_FB_API_KEY,
  authDomain:    import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId:     import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
};
export const firebaseApp = initializeApp(firebaseConfig);   // ⚠️ 중복 호출 금지

/* ───────────────────────────────
   2. 서비스 핸들 (재사용)
   ─────────────────────────────── */
export const db   = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

/* ───────────────────────────────
   3. Auth 헬퍼
   ─────────────────────────────── */
export const emailSignUp = (email: string, pw: string) =>
  createUserWithEmailAndPassword(auth, email, pw);

export const emailSignIn = (email: string, pw: string) =>
  signInWithEmailAndPassword(auth, email, pw);

export const logout = () => signOut(auth);

/** 글로벌 사용자 변동 리스너 */
export const onUserChanged = (cb: (u: User | null) => void) =>
  onAuthStateChanged(auth, cb);

/* ───────────────────────────────
   4. Post CRUD 헬퍼 (컬렉션: posts)
   ─────────────────────────────── */
type PostPayload = { title: string; url: string };

export const addPost = async (data: PostPayload) => {
  if (!auth.currentUser) throw new Error('Unauthenticated');
  return addDoc(collection(db, 'posts'), {
    ...data,
    author:    auth.currentUser.email ?? '익명',
    authorUid: auth.currentUser.uid,
    createdAt: serverTimestamp(),
  });
};

export const updatePost = async (id: string, data: Partial<PostPayload>) => {
  if (!auth.currentUser) throw new Error('Unauthenticated');
  return updateDoc(doc(db, 'posts', id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

export const deletePost = async (id: string) => {
  if (!auth.currentUser) throw new Error('Unauthenticated');
  return deleteDoc(doc(db, 'posts', id));
};

/** 실시간 게시글 구독 */
export const listenPosts = (cb: (posts: DocumentData[]) => void) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, snap =>
    cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))),
  );
};
