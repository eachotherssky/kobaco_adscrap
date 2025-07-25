import { useEffect, useState } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  type User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const auth = getAuth();

/* 사용자 상태 실시간 구독 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  return user;
}

/* 이메일 회원가입 - 로그인 헬퍼 */
export const emailSignUp = (email: string, pw: string) =>
  createUserWithEmailAndPassword(auth, email, pw);

export const emailSignIn = (email: string, pw: string) =>
  signInWithEmailAndPassword(auth, email, pw);

export const logout = () => signOut(auth);
