import React from 'react';
import { useTicketStore } from '../../store/ticketStore';
import { TicketListItem } from './TicketListItem';
import { Search, Filter } from 'lucide-react';

export function TicketList() {
  const { tickets } = useTicketStore();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">All Tickets</h2>
          <div className="flex space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tickets..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {tickets.map((ticket) => (
          <TicketListItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}