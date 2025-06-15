import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Earn from './pages/Earn';
import Presale from './pages/Presale';
import Airdrop from './pages/Airdrop';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/presale" element={<Presale />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </Routes>
      <nav className="fixed bottom-0 left-0 right-0 bg-white flex justify-around border-t">
        <Link to="/">🏠 Home</Link>
        <Link to="/earn">💰 Earn</Link>
        <Link to="/presale">🔥 Presale</Link>
        <Link to="/airdrop">🎁 Airdrop</Link>
      </nav>
    </div>
  );
}