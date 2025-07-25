import { useState } from 'react';
import { useAuth, emailSignIn, emailSignUp, logout } from '@/hooks/useAuth';

export default function AuthButtons() {
  const user = useAuth();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  if (user)
    return (
      <button onClick={logout} className="text-sm underline">
        로그아웃
      </button>
    );

  return (
    <div className="flex items-center gap-2">
      <input
        className="h-8 w-44 rounded border px-2 text-sm"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="h-8 w-28 rounded border px-2 text-sm"
        type="password"
        placeholder="password"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />
      <button
        onClick={() => emailSignIn(email, pw)}
        className="text-sm underline"
      >
        로그인
      </button>
      <button
        onClick={() => emailSignUp(email, pw)}
        className="text-sm underline"
      >
        가입
      </button>
    </div>
  );
}
