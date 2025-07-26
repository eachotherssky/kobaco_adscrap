/**
 * 로그인 상태 전역 훅
 * - 마운트 시 onAuthStateChanged 구독 → user 상태 갱신
 * - 필요한 곳에서 `const user = useAuth();` 로 간단히 사용
 */

import { useEffect, useState } from 'react';
import { onUserChanged } from '../lib/firebase';
import type { User } from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  // 컴포넌트 최초 마운트 때만 구독
  useEffect(() => onUserChanged(setUser), []);

  return user;   // - null 이면 미로그인 상태
}
