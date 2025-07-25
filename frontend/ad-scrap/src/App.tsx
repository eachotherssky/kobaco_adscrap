// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import NewPost from './pages/NewPost';
import AuthButtons from './components/AuthButtons';

export default function App() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <h1 className="text-xl font-bold">Ad-Scrap</h1>
        <AuthButtons />
      </header>

      <main className="mx-auto w-full max-w-3xl p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/new" element={<NewPost />} /> */}
        </Routes>
      </main>
    </>
  );
}