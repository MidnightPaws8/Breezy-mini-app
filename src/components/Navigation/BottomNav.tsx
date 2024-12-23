import React from 'react';
import { Home, Users, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Invite', path: '/invite' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 ${
                location.pathname === path ? 'text-orange-500' : 'text-gray-400'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}