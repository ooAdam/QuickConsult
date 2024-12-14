import React from 'react';
import { Bell, LogOut, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">Ticket Management</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">{user?.name}</span>
            <button
              onClick={logout}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}