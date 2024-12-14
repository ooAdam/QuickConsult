import React from 'react';
import { format } from 'date-fns';
import { MessageSquare, User, Clock } from 'lucide-react';
import { useTicketStore } from '../../store/ticketStore';

export function TicketDetail() {
  const { selectedTicket } = useTicketStore();

  if (!selectedTicket) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Select a ticket to view details</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-xl font-medium text-gray-900">{selectedTicket.title}</h2>
        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>Created by {selectedTicket.createdBy}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{format(selectedTicket.createdAt, 'PPp')}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="prose max-w-none">
          <p>{selectedTicket.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Messages</h3>
          <div className="space-y-4">
            {selectedTicket.messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {message.senderId}
                    </span>
                    <span className="text-sm text-gray-500">
                      {format(message.timestamp, 'p')}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-700">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}