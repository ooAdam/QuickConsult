import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Inbox, BarChart2, Brain, Users, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Tickets', href: '/tickets', icon: Inbox },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'AI Insights', href: '/ai-insights', icon: Brain },
  { name: 'SME Directory', href: '/sme-directory', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Inbox className="w-8 h-8" />
          <span className="text-xl font-bold">Support Hub</span>
        </div>
        
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium',
                  location.pathname === item.href
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}