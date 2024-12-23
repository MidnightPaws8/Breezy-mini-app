import React from 'react';
import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUserStore } from '../store/userStore';
import { getTelegramWebApp } from '../utils/telegram';

export function Invite() {
  const { addPoints } = useUserStore();

  const handleShare = () => {
    const webApp = getTelegramWebApp();
    webApp.MainButton.setText('Share Breezy Token');
    webApp.MainButton.show();
    webApp.MainButton.onClick(() => {
      // Handle share action
      addPoints(50); // Add points for sharing
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6 text-center"
      >
        <Share2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Invite Friends</h1>
        <p className="text-gray-400 mb-6">
          Earn 50 points for each friend you invite who joins Breezy Token!
        </p>
        <button
          onClick={handleShare}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Share with Friends
        </button>
      </motion.div>
    </div>
  );
}