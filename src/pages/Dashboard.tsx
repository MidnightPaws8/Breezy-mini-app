import React from 'react';
import { UserStats } from '../components/Dashboard/UserStats';
import { TaskList } from '../components/Dashboard/TaskList';
import { PremiumBox } from '../components/Dashboard/PremiumBox';

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <UserStats />
      <div className="grid gap-8">
        <TaskList />
        <PremiumBox />
      </div>
    </div>
  );
}