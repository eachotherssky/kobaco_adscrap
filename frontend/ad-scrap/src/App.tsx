import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
