// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
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

/* ──────────────────────────
   1. Firebase App 초기화
   ────────────────────────── */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
};

export const firebaseApp = initializeApp(firebaseConfig);

/* ──────────────────────────
   2. 서비스 핸들
   ────────────────────────── */
export const db   = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

/* ──────────────────────────
   3. Auth 래퍼
   ────────────────────────── */
export const emailSignUp = (email: string, pw: string) =>
  createUserWithEmailAndPassword(auth, email, pw);

export const emailSignIn = (email: string, pw: string) =>
  signInWithEmailAndPassword(auth, email, pw);

export const logout = () => signOut(auth);

export const onUserChanged = (cb: (user: User | null) => void) =>
  onAuthStateChanged(auth, cb);

/* ──────────────────────────
   4. CRUD 헬퍼 (posts 컬렉션)
   ────────────────────────── */
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

export const updatePost = async (
  id: string,
  data: Partial<PostPayload>,
) => {
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

/* ──────────────────────────
   5. 실시간 구독
   ────────────────────────── */
export const listenPosts = (
  cb: (posts: DocumentData[]) => void,
) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, snap =>
    cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))),
  );
};
