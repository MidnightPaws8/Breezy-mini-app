import React from 'react';
import { Trophy } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { motion } from 'framer-motion';

export function UserStats() {
  const { username, points } = useUserStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-6 mb-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Welcome, {username}!</h2>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-orange-500" />
            <span className="text-lg">{points} Points</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}