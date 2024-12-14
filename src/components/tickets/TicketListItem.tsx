import React from 'react';
import { format } from 'date-fns';
import { AlertCircle, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import type { Ticket } from '../../types';
import { useTicketStore } from '../../store/ticketStore';
import { cn } from '../../lib/utils';

interface TicketListItemProps {
  ticket: Ticket;
}

const statusIcons = {
  open: Clock,
  in_progress: AlertCircle,
  resolved: CheckCircle,
  escalated: ArrowUpRight,
};

const statusColors = {
  open: 'text-blue-500',
  in_progress: 'text-yellow-500',
  resolved: 'text-green-500',
  escalated: 'text-red-500',
};

export function TicketListItem({ ticket }: TicketListItemProps) {
  const { selectTicket } = useTicketStore();
  const StatusIcon = statusIcons[ticket.status];

  return (
    <div
      onClick={() => selectTicket(ticket)}
      className="p-4 hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <StatusIcon className={cn('w-5 h-5', statusColors[ticket.status])} />
          <div>
            <h3 className="text-sm font-medium text-gray-900">{ticket.title}</h3>
            <p className="text-sm text-gray-500">
              {ticket.description.slice(0, 100)}
              {ticket.description.length > 100 ? '...' : ''}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">
            {format(ticket.createdAt, 'MMM d, yyyy')}
          </p>
          <p className="text-sm text-gray-500">
            {format(ticket.createdAt, 'HH:mm')}
          </p>
        </div>
      </div>
    </div>
  );
}