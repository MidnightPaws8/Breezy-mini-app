import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeaderboardEntry {
  username: string;
  points: number;
  rank: number;
}

export function Leaderboard() {
  // This would be fetched from your backend
  const leaderboard: LeaderboardEntry[] = [
    { username: 'user1', points: 1500, rank: 1 },
    { username: 'user2', points: 1200, rank: 2 },
    { username: 'user3', points: 1000, rank: 3 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-orange-500" />
        <h1 className="text-2xl font-bold">Leaderboard</h1>
      </div>
      <div className="space-y-4">
        {leaderboard.map((entry, index) => (
          <motion.div
            key={entry.username}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-orange-500">
                #{entry.rank}
              </span>
              <span>{entry.username}</span>
            </div>
            <span className="font-semibold">{entry.points} Points</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}