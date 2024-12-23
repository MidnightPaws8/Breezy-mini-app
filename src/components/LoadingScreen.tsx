import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Loader2 className="w-16 h-16 text-orange-500" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-2xl font-bold text-white"
        >
          Loading Breezy Token
        </motion.h1>
      </motion.div>
    </div>
  );
};