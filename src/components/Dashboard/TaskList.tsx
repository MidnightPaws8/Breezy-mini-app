import React from 'react';
import { CheckCircle2, Twitter, Users, Youtube, Instagram, Wallet } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { motion } from 'framer-motion';

interface Task {
  id: string;
  title: string;
  icon: React.ReactNode;
  completed: boolean;
  points: number;
}

export function TaskList() {
  const { completedTasks, completeTask } = useUserStore();

  const tasks: Task[] = [
    { id: 'telegram', title: 'Join Telegram Group', icon: <Users className="w-6 h-6" />, points: 100, completed: completedTasks.includes('telegram') },
    { id: 'twitter', title: 'Follow on Twitter', icon: <Twitter className="w-6 h-6" />, points: 100, completed: completedTasks.includes('twitter') },
    { id: 'youtube', title: 'Subscribe on YouTube', icon: <Youtube className="w-6 h-6" />, points: 100, completed: completedTasks.includes('youtube') },
    { id: 'instagram', title: 'Follow on Instagram', icon: <Instagram className="w-6 h-6" />, points: 100, completed: completedTasks.includes('instagram') },
    { id: 'wallet', title: 'Connect TON Wallet', icon: <Wallet className="w-6 h-6" />, points: 100, completed: completedTasks.includes('wallet') },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-6">Tasks</h2>
      {tasks.map((task, index) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-center justify-between p-4 rounded-lg ${
            task.completed ? 'bg-orange-500/20' : 'bg-gray-800'
          }`}
        >
          <div className="flex items-center gap-3">
            {task.icon}
            <span>{task.title}</span>
          </div>
          <button
            onClick={() => !task.completed && completeTask(task.id)}
            disabled={task.completed}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              task.completed
                ? 'bg-orange-500/50 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {task.completed ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Completed</span>
              </>
            ) : (
              <span>+{task.points} Points</span>
            )}
          </button>
        </motion.div>
      ))}
    </div>
  );
}