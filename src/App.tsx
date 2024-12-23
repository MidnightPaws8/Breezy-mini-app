import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { BottomNav } from './components/Navigation/BottomNav';
import { Dashboard } from './pages/Dashboard';
import { Invite } from './pages/Invite';
import { Leaderboard } from './pages/Leaderboard';
import { useUserStore } from './store/userStore';
import { getTelegramWebApp, isTelegramWebApp } from './utils/telegram';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { setUsername } = useUserStore();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (!isTelegramWebApp()) {
        setError('Please open this app through Telegram');
        setLoading(false);
        return;
      }

      const webApp = getTelegramWebApp();
      webApp.ready();

      const { user } = webApp.initDataUnsafe;
      if (user?.username) {
        setUsername(user.username);
      }

      const timer = setTimeout(() => {
        setLoading(false);
      }, 6000);

      return () => clearTimeout(timer);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  }, [setUsername]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}