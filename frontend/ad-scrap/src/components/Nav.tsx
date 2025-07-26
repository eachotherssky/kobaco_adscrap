import { Link } from 'react-router-dom';
import AuthButtons from './AuthButtons';

export default function Nav() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b">
      <h1 className="text-xl font-bold">
        <Link to="/">Ad-Scrap</Link>
      </h1>
      <AuthButtons />
    </header>
  );
}
