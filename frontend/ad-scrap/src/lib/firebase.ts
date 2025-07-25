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
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);

/* ------------------- 서비스 핸들 ------------------- */
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

/* ------------------- Auth 래퍼 ------------------- */
export const login = () => signInWithPopup(auth, googleProvider);
export const logout = () => signOut(auth);
export const onUserChanged = (cb: (user: User | null) => void) =>
  onAuthStateChanged(auth, cb);

/* ------------------- CRUD 헬퍼 ------------------- */
export const addPost = async (data: { title: string; url: string }) => {
  if (!auth.currentUser) throw new Error('Unauthenticated');
  return addDoc(collection(db, 'posts'), {
    ...data,
    author: auth.currentUser.displayName ?? '익명',
    authorUid: auth.currentUser.uid,
    createdAt: serverTimestamp(),
  });
};

export const updatePost = async (
  id: string,
  data: { title?: string; url?: string },
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

/* ------------------- 실시간 조회 ------------------- */
export const listenPosts = (
  cb: (posts: Array<Record<string, unknown>>) => void,
) => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, snap =>
    cb(snap.docs.map(d => ({ id: d.id, ...d.data() }))),
  );
};
