import React, { useState } from 'react';
import { Crown, Loader2 } from 'lucide-react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { motion } from 'framer-motion';

export function PremiumBox() {
  const [tonConnectUI] = useTonConnectUI();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    if (!tonConnectUI.connected) return;
    
    setLoading(true);
    try {
      await tonConnectUI.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes
        messages: [
          {
            address: 'YOUR_WALLET_ADDRESS',
            amount: '1000000000', // 1 TON
          },
        ],
      });
      // Handle successful transaction
    } catch (error) {
      console.error('Transaction failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white"
    >
      <div className="flex items-center gap-3 mb-4">
        <Crown className="w-8 h-8" />
        <h2 className="text-xl font-bold">Premium Offer</h2>
      </div>
      <p className="mb-6">Get 5000 Breezy points for just 1 TON!</p>
      <button
        onClick={handlePurchase}
        disabled={!tonConnectUI.connected || loading}
        className="w-full bg-white text-orange-500 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Purchase Points'
        )}
      </button>
    </motion.div>
  );
}